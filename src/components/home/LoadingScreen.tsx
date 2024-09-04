import React from "react";
import { Card } from "react-bootstrap";

import "./css/loading-anim/WatchDogs.css";
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

            jumbledText1: this.scramble("Establishing connection"),
        };
    }

    public async componentDidMount(): Promise<void>
    {
        setTimeout(async () =>
            this.setState({
                userIp: await Server.get("https://api.ipify.org?format=json", true).then(e => e.ip),
                userLocation: await Server.get(`/external/ip-geolocation/${this.state.userIp}`)
            }),
            8000 + 3000 // please change back to 6000
        );

        setTimeout(() => this.buildText(this.state.jumbledText1), 2500 + 3000);
        setTimeout(() => this.unscramble("Establishing connection"), 4500 + 3000);
        setTimeout(() => window.location.hash = "/home", 12500 + 8000 + 5000 + 3000); // Seq2 duration + seq1 + dampener + epilepsy warning
    }

    private scramble(text: string): string
    {
        return text
            ? text.split("").map(() => getRandomChar()).join("")
            : "Default string";
    }

    private unscramble(text: string): void
    {
        let iterations = 0;

        const interval = setInterval(() =>
        {
            const s = this.state.jumbledText1.split("")
                .map((_c, i) => i < iterations
                    ? text[i]
                    : getRandomChar())
                .join("");
            this.setState({ jumbledText1: s });

            if (iterations >= text.length) { clearInterval(interval); }
            iterations += 1 / 2;
        },
            30
        );
    }

    private buildText(text: string): void
    {
        let iterations = 0;
        let original = text;

        const interval = setInterval(() =>
        {
            const s = original.split("")
                .map((_c, i) => i < iterations
                    ? text[i]
                    : "")
                .join("");
            this.setState({ jumbledText1: s });

            if (iterations >= text.length) { clearInterval(interval); }
            iterations += 1;
        },
            30
        );
    }

    public render(): React.ReactNode
    {
        const userIp = this.state.userIp;
        const userLocation = this.state.userLocation;

        if (!userIp || !userLocation)
        {
            return (
                <div className="main-container">
                    <div className="epilepsy-warning">
                        <b>WARNING:</b> This animation may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised.
                    </div>
                    {/* 0.6s dot flash x2 (1.2s) */}
                    <div className="terminal-dot sequence-1" />

                    {/* Random symbols flash */}
                    <div className="triangle" />
                    <div className="circle" />

                    {/* Jumbled text comes in and looks cool */}
                    <h3 id="scramble-1">{this.state.jumbledText1}</h3>
                </div>
            );
        }

        const sentences: { header: string, content: string; }[] = [
            { header: `ExtAccessLogger -- Validating`, content: "" },
            { header: ``, content: "" },
            { header: `Accessing from: `, content: `${userLocation.city} ${userLocation.state_prov}, ${userLocation.country_name}` },
            { header: `IPv4: `, content: `${userIp}` },
            { header: `ISP: `, content: `${userLocation.organization}` },
            { header: ``, content: "" },
            { header: `Latitude: `, content: `${userLocation.latitude}` },
            { header: `Longitude: `, content: `${userLocation.longitude}` },
            { header: ``, content: "" },
            { header: `ExtAccessLogger -- Validated!`, content: "" },
            { header: `ExtAccessLogger -- Exiting`, content: "" },
        ];

        console.log(userLocation);

        return (
            <div className="main-container">
                <div className="star" />
                <div className="spin-hex" />

                <div className="triangle" />
                <div className="circle" />

                <h3 id="established-2">### Connection established ###</h3>

                {/* 2 terminal dot flashes */}
                <div className="terminal-dot sequence-2" />

                {/* Make fake animated terminal screen with user data */}
                {/* When terminal done, immiediately goes away */}
                {/* 2 Terminal dot flashes */}
                <div className="square-centered-container">
                    <div className="connection">
                        <Card className="terminal">
                            <Card.Header className="terminal-card-header">ext-logger.sh</Card.Header>
                            <Card.Body>
                                <ul id="terminal-sentences">
                                    {sentences.map((s, i) =>
                                        <li className="terminal-line" style={{ color: i === 0 || i === 9 || i === 10 ? "cyan !important" : "" }}>
                                            <div className="terminal-header">{s.header}</div><div className="terminal-content">{s.content}</div>
                                        </li>
                                    )}
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                {/* "Estalished" builds itself letter by letter next to terminal dot */}
                {/* "Retrieving profile" */}
                <h3 id="retrieving">### Retrieving profile ###</h3>

                {/* Now redirect to home page */}
                {/* 0.6s hex flash () */}
                <div className="hexagon" />
            </div>
        );
    }
}