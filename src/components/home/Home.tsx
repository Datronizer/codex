import React from "react";
import "./css/Home.css";
import { Server } from "../../Server";
import
{
    Root as LanyardRoot,
    Data as LanyardData,
    // Activity as LanyardActivity,
    // Spotify as LanyardSpotify
} from "./dtos/LanyardTypes";
// import { Card, Col,  Row } from "react-bootstrap";

// const CDN = "https://cdn.discordapp.com/";

type P = {};
type S = {
    interval?: NodeJS.Timer;
    lanyardData?: LanyardData;
};
export class Home extends React.Component<P, S>
{
    public constructor(props: P)
    {
        super(props);
        this.state = { lanyardData: undefined };
    }

    public async componentDidMount(): Promise<void>
    {
        this.getLanyard();
        this.setState({ interval: setInterval(async () => await this.getLanyard(), 1000 * 30) });
    }

    public async componentWillUnmount(): Promise<void>
    {
        clearInterval(this.state.interval);
        this.setState({ interval: undefined });
    }

    async getLanyard(): Promise<void>
    {
        const lanyard: LanyardRoot = await Server.get("https://api.lanyard.rest/v1/users/437801040843112450");
        const lanyardData: LanyardData = lanyard.data;

        this.setState({ lanyardData });
    }

    public override render(): React.ReactNode
    {
        const data = this.state.lanyardData;

        if (!data)
        {
            return null;
        }

        // const game = data.activities.filter(e => e.name !== "Spotify")[0] ?? undefined;

        return (
            <div className="home-container">
                {/* <div className="" */}
                <div className="menu-container">
                    <ul className="menu">
                        <li><a href={`${process.env.PUBLIC_URL}/#/resume`}>Resume</a></li>
                        <li><a href={`${process.env.PUBLIC_URL}/#/about/site`}>Blog</a></li>
                        <li><a href={`${process.env.PUBLIC_URL}/#/hex`}>Projects</a></li>
                        <li><a href={`${process.env.PUBLIC_URL}/#/about`}>About</a></li>
                        <li ><a href={`${process.env.PUBLIC_URL}/#/home/intro`}>Rewatch intro</a></li >
                    </ul>
                </div>
                {/* <Card style={{ backgroundColor: "#23272a" }}>
                    <Card.Body className="discord-box">
                        <Row>
                            <Col style={{ maxWidth: "fit-content" }}>
                                <img
                                    alt="Discord avatar"
                                    className="discord-avatar"
                                    src={`${CDN}/avatars/${data.discord_user?.id}/${data.discord_user?.avatar}`}
                                />
                            </Col>
                            <Col className="username">
                                <b>{data.discord_user?.global_name}</b>
                            </Col>
                            <Col className="button-container">
                                <div>
                                    <button
                                        className="view-profile"
                                        onClick={() => window.location.href = `https://discord.com/users/${DISCORD_ID}`}
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        {
                            data.spotify || game
                                ? <>
                                    <hr style={{ border: "0.1rem solid lightgray" }} />
                                    <Row>
                                        <Col>
                                            {
                                                data.spotify && game
                                                    ? <>
                                                        <SpotifyCard spotify={data.spotify} />
                                                        <hr style={{ border: "0.1rem solid lightgray" }} />
                                                        <GameCard activity={data.activities.filter(e => e.name !== "Spotify")[0]} />
                                                    </>
                                                    : data.spotify
                                                        ? <SpotifyCard spotify={data.spotify} />
                                                        : <GameCard activity={data.activities.filter(e => e.name !== "Spotify")[0]} />
                                            }

                                        </Col>
                                    </Row>
                                </>
                                : <div className="activities">Hmm... Looks like Chien isn't doing anything at the moment</div>
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
                </Card> */}
            </div>
        );
    }
}

// function GameCard(props: { activity?: LanyardActivity; }): JSX.Element | null
// {
//     if (!props.activity)
//     {
//         return null;
//     }

//     return (
//         <Row style={{ color: "white" }}>
//             <h6><b>PLAYING A GAME</b></h6>
//             <Row>
//                 <Col style={{ maxWidth: "fit-content" }}>
//                     <img
//                         alt="Game icon"
//                         style={{ width: "4.5rem", borderRadius: "0.5rem" }}
//                         src={`${CDN}/app-assets/${props.activity.application_id}/${props.activity.assets?.large_image}`}
//                     />
//                 </Col>
//                 <Col className="spotify-title">
//                     <div>{props.activity.name}</div>
//                     <div><small>{props.activity.details ?? null}</small></div>
//                     <div><small>{props.activity.state}</small></div>
//                 </Col>
//             </Row>
//         </Row>
//     );
// }

// function SpotifyCard(props: { spotify?: LanyardSpotify; }): JSX.Element | null
// {
//     if (!props.spotify)
//     {
//         return null;
//     }

//     return (
//         <Row style={{ color: "white" }}>
//             <Row>
//                 <Col><h6><b>LISTENING ON SPOTIFY</b></h6></Col>
//                 <Col className="spotify-logo">
//                     <img
//                         alt="Spotify logo"
//                         style={{ maxWidth: "1.5rem" }}
//                         src="https://i0.wp.com/www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
//                     />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col style={{ maxWidth: "fit-content" }}>
//                     <img
//                         alt="Album logo"
//                         style={{ width: "4.5rem", borderRadius: "0.5rem" }}
//                         src={props.spotify.album_art_url}
//                     />
//                 </Col>
//                 <Col className="spotify-title">
//                     <div>{props.spotify.song}</div>
//                     <div><small>{props.spotify.artist}</small></div>
//                     <div><small>on {props.spotify.album}</small></div>
//                     {/* TODO: Add a duration bar here. On duration over, do a get request, else do it every 30s to save API */}
//                 </Col>
//             </Row>
//         </Row>
//     );
// }