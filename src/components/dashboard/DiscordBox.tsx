import { Card, Row, Col } from "react-bootstrap";
import { Activity, LanyardData, Spotify } from "../home/dtos/LanyardTypes";


const CDN = "https://cdn.discordapp.com/";

export const DiscordBox = ({ lanyardData }: { lanyardData?: LanyardData; }): JSX.Element =>
{
    if (!lanyardData)
    {
        return (
            <Card className="discord-card">
                <Card.Body className="discord-box">
                    Please wait... Loading Sienna's data
                </Card.Body>
            </Card>
        );
    }

    const game = lanyardData.activities.filter(e => e.name !== "Spotify")[0] ?? undefined;

    return (
        <Card className="discord-card">
            <Card.Body className="discord-box">
                <Row>
                    <Col style={{ maxWidth: "fit-content" }}>
                        <img
                            alt="Discord avatar"
                            className="discord-avatar"
                            src={`${CDN}/avatars/${lanyardData.discord_user?.id}/${lanyardData.discord_user?.avatar}`}
                        />
                    </Col>
                    <Col className="username">
                        <b>{lanyardData.discord_user?.global_name}</b>
                    </Col>
                    <Col className="button-container">
                        <div>
                            <button
                                className="view-profile"
                                onClick={() => window.location.href = `https://discord.com/users/${import.meta.env.VITE_DISCORD_ID}`}
                            >
                                View Profile
                            </button>
                        </div>
                    </Col>
                </Row>
                {
                    lanyardData.spotify || game
                        ? <>
                            <hr style={{ border: "0.1rem solid lightgray" }} />
                            <Row>
                                <Col>
                                    {
                                        lanyardData.spotify && game
                                            ? <>
                                                <SpotifyCard spotify={lanyardData.spotify} />
                                                <hr style={{ border: "0.1rem solid lightgray" }} />
                                                <GameCard activity={lanyardData.activities.filter(e => e.name !== "Spotify")[0]} />
                                            </>
                                            : lanyardData.spotify
                                                ? <SpotifyCard spotify={lanyardData.spotify} />
                                                : <GameCard activity={lanyardData.activities.filter(e => e.name !== "Spotify")[0]} />
                                    }

                                </Col>
                            </Row>
                        </>
                        : <div className="activities">Hmm... Looks like Sienna isn't doing anything at the moment</div>
                }
            </Card.Body>
        </Card>
    );
}


const GameCard = (props: { activity?: Activity; }): JSX.Element | null =>
{
    if (!props.activity)
    {
        return null;
    }

    return (
        <Row style={{ color: "white" }}>
            <h6><b>PLAYING A GAME</b></h6>
            <Row>
                <Col style={{ maxWidth: "fit-content" }}>
                    <img
                        alt="Game icon"
                        style={{ width: "4.5rem", borderRadius: "0.5rem" }}
                        src={`${CDN}/app-assets/${props.activity.application_id}/${props.activity.assets?.large_image}`}
                    />
                </Col>
                <Col className="spotify-title">
                    <div>{props.activity.name}</div>
                    <div><small>{props.activity.details ?? null}</small></div>
                    <div><small>{props.activity.state}</small></div>
                </Col>
            </Row>
        </Row>
    );
}

const SpotifyCard = (props: { spotify?: Spotify; }): JSX.Element | null =>
{
    if (!props.spotify)
    {
        return null;
    }

    return (
        <Row style={{ color: "white" }}>
            <Row>
                <Col><h6><b>LISTENING ON SPOTIFY</b></h6></Col>
                <Col className="spotify-logo">
                    <img
                        alt="Spotify logo"
                        style={{ maxWidth: "1.5rem" }}
                        src="https://i0.wp.com/www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
                    />
                </Col>
            </Row>
            <Row>
                <Col style={{ maxWidth: "fit-content" }}>
                    <img
                        alt="Album logo"
                        style={{ width: "4.5rem", borderRadius: "0.5rem" }}
                        src={props.spotify.album_art_url}
                    />
                </Col>
                <Col className="spotify-title">
                    <div>{props.spotify.song}</div>
                    <div><small>{props.spotify.artist}</small></div>
                    <div><small>on {props.spotify.album}</small></div>
                    {/* TODO: Add a duration bar here. On duration over, do a get request, else do it every 30s to save API */}
                </Col>
            </Row>
        </Row>
    );
}
