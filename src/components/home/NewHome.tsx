import React from "react";


type P = {};
type S = {
    // interval?: NodeJS.Timer;
    // lanyardData?: LanyardData;

    mouseX?: number;
    mouseY?: number;
};
export class NewHome extends React.Component<P, S>
{
    public constructor(props: P)
    {
        super(props);
        this.state = {
            // lanyardData: undefined, 
            mouseX: undefined,
            mouseY: undefined
        };
    }

    public async componentDidMount(): Promise<void>
    {
        // this.getLanyard();
        // this.setState({ interval: setInterval(async () => await this.getLanyard(), 1000 * 30) });
    }

    public async componentWillUnmount(): Promise<void>
    {
        // clearInterval(this.state.interval);
        // this.setState({ interval: undefined });
    }

    // async getLanyard(): Promise<void>
    // {
    //     const lanyard: LanyardRoot = await Server.get("/lanyard/");
    //     const lanyardData: LanyardData = lanyard.data;

    //     this.setState({ lanyardData });
    // }

    public override render(): React.ReactNode
    {
        // const data = this.state.lanyardData;

        // if (!data)
        // {
        //     return null;
        // }

        // const game = data.activities.filter(e => e.name !== "Spotify")[0] ?? undefined;


        return (
            <div className="home-container" onMouseMove={e => this.setState({ mouseX: e.screenX, mouseY: e.screenY })}>
                <p>X: {this.state.mouseX}, Y: {this.state.mouseY}</p>
                <div className="trail-blocker">
                    {React.cloneElement(<div className="trail-elements" />,)}
                </div>
                {/* <h1 className="name-container">
                    <div>Name</div>
                    <div>Surname</div>
                </h1> */}

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