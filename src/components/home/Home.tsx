import { FC, useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { SiArtstation, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { Server } from "@/Server";
import { DiscordBox } from "../dashboard/DiscordBox";
import { LanyardData, LanyardResponse } from "./dtos/LanyardTypes";
import "./Home.scss";
import { Container } from "react-bootstrap";


const URL = `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`;


export const Home: FC = () =>
{
    const [lanyard, setLanyard] = useState<LanyardData>();
    const projectLinks = [
        {
            title: "CareerLift AI",
            description: "AI-powered resume analyzer and matcher to see how you stack up.",
            href: import.meta.env.VITE_PORTFOLIO_URL || "https://careerlift.trueongod.com/",
            tags: ["AI", "Product", "New"]
        },
        {
            title: "YarkNet",
            description: "A playful space sim to explore the Yarkovsky effect on asteroids.",
            href: import.meta.env.VITE_YARKNET_URL || "https://yarknet.trueongod.com/",
            tags: ["Visualization", "Physics"]
        }
    ];

    const highlightStats = [
        { label: "Projects shipped", value: "10+" },
        { label: "Focus areas", value: "ML, Full Stack, Cloud" },
        {
            label: "Now building",
            value: "Project OLIVIA",
            url: "https://www.linkedin.com/pulse/introducing-olivia-my-self-sustaining-homelab-personal-sienna-truong-krhte"
        }
    ];


    useEffect(() =>
    {
        const fetchLanyard = () =>
        {
            Server.get<LanyardResponse>(URL, true)
                .then(e => setLanyard(e.data))
                .catch(err => console.error(err));
        };

        fetchLanyard();

        const intervalId = setInterval(fetchLanyard, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container className="content-shell">
            <section className="hero-grid">
                <div className="hero-card">
                    <div className="eyebrow">Full stack developer & tinkerer</div>
                    <h1 className="hero-title">Building thoughtful tools with a playful edge.</h1>
                    <p className="lede">
                        I design, code, and ship interfaces that feel deliberate — from AI products to tiny simulations.
                        From video games to web apps, I love crafting experiences
                        that make you curious again.
                    </p>
                    <div className="hero-actions">
                        <a className="primary-button" href="/resume">View resume</a>
                    </div>
                    <div className="hero-stats">
                        {highlightStats.map(stat =>
                        {
                            const clickable = Boolean(stat.url);
                            return (
                                <div
                                    className={`stat-chip ${clickable ? "clickable" : ""}`}
                                    key={stat.label}
                                    onClick={() => stat.url && window.open(stat.url, "_blank")}
                                >
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                    {clickable ? <LuArrowUpRight className="stat-icon" aria-hidden /> : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* <div className="status-panel">
                        <div className="panel-header">
                            <span className="eyebrow">Live</span>
                            <span className="live-dot" />
                        </div>
                        <DiscordBox lanyardData={lanyard} />
                        <div className="panel-footer">
                            Powered by Discord + Lanyard. Refreshes every few seconds.
                        </div>
                    </div> */}
            </section>

            <section className="projects-section">
                <div className="section-header">
                    <div className="eyebrow">Projects</div>
                    <h2>Check out my other projects</h2>
                    <p className="section-subtitle">
                        Experiments, shipped products, and ongoing builds that balance polish with curiosity.
                    </p>
                </div>
                <div className="projects-grid">
                    {projectLinks.map(link => (
                        <a key={link.title} className="project-card" href={link.href} target="_blank" rel="noreferrer">
                            <div className="project-card__top">
                                <div className="project-name">{link.title}</div>
                                <LuArrowUpRight aria-hidden />
                            </div>
                            <p className="project-summary">{link.description}</p>
                            {link.tags &&
                                <div className="project-tags">
                                    {link.tags.map(tag => (
                                        <span key={`${link.title}-${tag}`} className="tag">{tag}</span>
                                    ))}
                                </div>
                            }
                        </a>
                    ))}
                </div>
            </section>
        </Container>
    );
}
