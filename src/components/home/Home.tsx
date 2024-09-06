import { Card, Col, Row } from "react-bootstrap";
import { Activity, Spotify, useLanyard } from "react-use-lanyard";

const CDN = "https://cdn.discordapp.com/";


export function Home()
{
    const lanyardData = useLanyard({ userId: process.env.REACT_APP_DISCORD_ID! }).data?.data;

    if (!lanyardData)
    {
        return null;
    }

    const game = lanyardData.activities.filter(e => e.name !== "Spotify")[0] ?? undefined;


    return (
        <div className="home-container">
            <div className="home-grid">
                <div className="">

                </div>
            </div>
            <div className="name-container">
                <div className="name-glitch">CHIEN TRUONG </div>
                <div className="name-glow">CHIEN TRUONG </div>
            </div>
            <div className="menu-container">
                <ul className="menu">
                    <li><a href={`${process.env.PUBLIC_URL}/#/resume`}>Résumé</a></li>
                    <li><a href={`${process.env.PUBLIC_URL}/#/about/site`}>Blog</a></li>
                    <li><a href={`${process.env.PUBLIC_URL}/#/hex`}>Projects</a></li>
                    <li><a href={`${process.env.PUBLIC_URL}/#/about`}>About</a></li>
                    <li><a href={`${process.env.PUBLIC_URL}/#/home/intro`}>Rewatch intro</a></li>
                </ul>
            </div>

            <div style={{ position: "absolute" }}>
                <Card style={{ backgroundColor: "#23272a" }}>
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
                                        onClick={() => window.location.href = `https://discord.com/users/${process.env.REACT_APP_DISCORD_ID}`}
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
                <br />
                <Card style={{ backgroundColor: "#23272a" }}>
                    <Card.Body className="" style={{ color: "white" }}>
                        <Row>
                            Blog goes here
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}


function GameCard(props: { activity?: Activity; }): JSX.Element | null
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

function SpotifyCard(props: { spotify?: Spotify; }): JSX.Element | null
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