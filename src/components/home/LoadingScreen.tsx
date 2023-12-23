import React from "react";
import { Container } from "react-bootstrap";

import "./css/WatchDogs.css";
import { Server } from "../../Server";
import { IpLocationDto } from "./dtos/IpLocation.dto";
import { getRandomChar } from "../../util";

type P = {};
type S = {
    userIp?: string;
    userLocation?: IpLocationDto;

    jumbledText1: string;
};
export class LoadingScreen extends React.Component<P, S>
{
    public constructor(props: P)
    {
        super(props);
        this.state = {
            userIp: undefined,
            userLocation: undefined,

            jumbledText1: this.jumbleText("Establishing connection")
            // jumbledText1: "Establishing connection"
        };
    }

    public async componentDidMount(): Promise<void>
    {
        setTimeout(async () =>
            this.setState({
                userIp: await Server.get("https://api.ipify.org?format=json").then(e => e.ip),
            }),
            100000 // please change back to 6000
        );

        // setTimeout(() => this.unjumbledText("Establishing connection"), 6000)
    }

    private async getUserLocation(ip: string)
    {
        this.setState({ userLocation: await Server.get(`http://ip-api.com/json/${ip}`) });
    }

    private jumbleText(text: string): string
    {
        return text
            ? text.split("").map(() => getRandomChar()).join("")
            : "Default string";
    }

    private unjumbledText(originalText: string): void
    {
        let iterations = 0;

        const interval = setInterval(() =>
        {
            console.log(this.state.jumbledText1)
            this.setState({
                jumbledText1: this.state.jumbledText1.split("")
                    .map((c, i) =>
                    {
                        if (i < originalText.length)
                        {
                            return originalText[i]
                        }
                        return getRandomChar()
                    })
                    .join("")
            })

            if (iterations >= originalText.length) { clearInterval(interval) }
            iterations += 1;
        },
            250
        )
    }

    private TextScrambler(props: { originalText: string }): JSX.Element | null
    {
        const originalText = props.originalText ?? this.state.jumbledText1
        let text = "Establishing connection";
        let iterations = 0;

        const interval = setInterval(() =>
        {
            text.split("")
                .map((c, i) => i < originalText.length
                    ? originalText[i]
                    : getRandomChar())
                .join("")

            if (iterations >= originalText.length) { clearInterval(interval) }
            iterations += 1;
        },
            250
        )

        return (
            <h1>{text}</h1>
        )
    }

    private unscramble1(): void
    {
        const elt = document.getElementById("scramble-1")
        if (!elt) { return; }

        console.log(elt.innerText)
        let originalText = "Establishing connection";

        let iterations = 0;

        const interval = setInterval(() =>
        {
            elt.innerText.split("")
                .map((c, i) => i < originalText.length
                    ? c = originalText[i]
                    : c = getRandomChar())
                .join("")

            if (iterations >= originalText.length) { clearInterval(interval) }
            iterations += 1;
        },
            250
        )
    }

    public render(): React.ReactNode
    {
        // console.log(this.state);
        const userIp = this.state.userIp;
        const userLocation = this.state.userLocation;

        if (!userIp)
        {
            return (
                <div className="main-container">
                    {/* 0.6s dot flash x2 (1.2s) */}
                    <div className="terminal-dot" />

                    {/* Random symbols flash */}
                    <div className="triangle" />
                    <div className="circle" />

                    {/* Establishing \n Connection 1s , no loading ellipses,
                    Do the WatchDogs white bars covering the text (look up Inintializing)
                    */}

                    {/* 2 flashes, cubic zoom, transition to found data */}

                    {/* >3s Fake search (6s) */}
                    <div className="establishing-container">
                        {/* <div onMouseOver={() => this.unjumbledText("Establishing connection")}> */}
                        <h1 id="scramble-1" onMouseOver={() => this.unscramble1()}>Steam winter sale</h1>
                        {/* <this.TextScrambler originalText="Establishing connection" /> */}
                        {/* </div> */}
                    </div>
                </div>
            );
        }

        if (!userLocation) { this.getUserLocation(userIp); }

        return (
            <div className="main-container">
                <div className="triangle" />
                <div className="circle" />

                {/* 2 terminal dot flashes */}

                {/* "Estalished" builds itself letter by letter next to terminal dot */}

                {/* Make fake animated terminal screen with user data */}
                {/* Terminal starts up slow, 1/3s per line so user sees their data being laid out 

                Example:
                > GeneralAuthLogger -- Validating (1s) `cyan`
                >
                > Accessing from: Toronto, ON, Canada (1/3s)
                > IPv4: xxx.xxx.xxx.xxx (builds itself up slowly)
                > ISP: Rogers Telecom
                > (1s)
                > Latitude: xx.xxxxx (1/2s)
                > Longitude: xx.xxxxx
                > (1s)
                > GeneralAuthLogger -- Validated! `cyan`
                > GeneralAuthLogger -- Exiting

                titles should be grayed, only data is white.
                */}

                {/* When terminal done, immiediately goes away */}

                {/* 2 Terminal dot flashes */}
                {/* "Retrieving profile" */}

                {/* Now render home page */}

                {/* 
                    Refer to this for home page reference
                    https://interfaceingame.com/screenshots/watch-dogs-2-main-menu/ 

                    For background art, 
                */}
                {/* Chien "TrueOnGod" Truong forms from jumbled text */}


                <div className="square-centered-container">
                    <div className="connection">
                        <h1>Connection established</h1>
                        <h1>{userIp}</h1>
                        <h1>{userLocation?.city}</h1>
                    </div>
                </div>

                {/* 0.6s hex flash () */}
                <div className="hexagon" />
            </div>
        );
    }
}