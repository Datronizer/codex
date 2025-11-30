import { LanyardResponse, LanyardData } from "./dtos/LanyardTypes";
import { FC, useEffect, useState } from "react";

// import startButton from "/assets/win98-start-button.png";
import PageIcon from "./subcomponents/PageIcon";
import { Server } from "@/Server";
import { Card, Row } from "react-bootstrap";
import { DiscordBox } from "../dashboard/DiscordBox";


const URL = `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`;


export const Home: FC = () =>
{
    const [lanyard, setLanyard] = useState<LanyardData>();
    const [startToggle, setStartToggle] = useState<boolean>(false);
    const projectLinks = [
        {
            title: "CareerLift AI",
            description: "Want to see how you fare in the job market? Try out my AI-powered resume analyzer and job matcher!",
            href: import.meta.env.VITE_PORTFOLIO_URL || "https://careerlift.trueongod.com/",
            isNewProject: true
        },
        {
            title: "YarkNet",
            description: "A simple space simulator to view the Yarkovsky effect on asteroids over time.",
            href: import.meta.env.VITE_YARKNET_URL || "https://yarknet.trueongod.com/",
            isNewProject: true
        },
        {
            title: "GitHub",
            description: "Browse the rest of my repos, experiments, and archived builds.",
            href: import.meta.env.VITE_GITHUB_URL || "https://github.com/"
        },
        {
            title: "More coming soon",
            description: "I'm regularly shipping — check back for new posts and links.",
            href: import.meta.env.VITE_PORTFOLIO_URL || "https://github.com/"
        }
    ];

    useEffect(() =>
    {
        const intervalId = setInterval(() =>
        {
            Server.get<LanyardResponse>(URL, true)
                .then(e => setLanyard(e.data))
                .catch(err => console.error(err));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [lanyard]);

    return (
        <div className="home-container">
            <div className="menu-container">

            </div>

            <div className="home-content">
                {/* <div className="discord-box-container">
                    <DiscordBox lanyardData={lanyard} />
                </div>
                <Card style={{ backgroundColor: "#23272a" }}>
                    <Card.Body className="" style={{ color: "white" }}>
                        <Row>
                            Blog goes here
                        </Row>
                    </Card.Body>
                </Card> */}
                <Card style={{ backgroundColor: "#23272a" }}>
                    <Card.Body className="projects-card" style={{ color: "white" }}>
                        <h5><b>Check out my other projects!</b></h5>
                        <div className="projects-intro">A quick hop to the rest of the things I'm building.</div>
                        <ul className="projects-list">
                            {projectLinks.map(link => (
                                <li key={link.title} className={`project-item ${link.isNewProject ? "new-project" : ""}`}>
                                    <a className="project-link" href={link.href} target="_blank" rel="noreferrer">
                                        {link.title}
                                    </a>
                                    <div className="project-summary">{link.description}</div>
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
            <div className={`home-taskbar ${startToggle ? "active" : ""}`}>
                {/* <input type="checkbox" className="start-button" src={startButton} checked={startToggle} onChange={() => setStartToggle(!startToggle)} /> */}
            </div>
        </div>
    );
}
