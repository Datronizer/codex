import { FC, useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { SiArtstation, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { Server } from "@/Server";
import { DiscordBox } from "../dashboard/DiscordBox";
import { LanyardData, LanyardResponse } from "./dtos/LanyardTypes";
import "./Home.scss";


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
        },
        {
            title: "GitHub",
            description: "Repos, experiments, and all the half-finished rabbit holes.",
            href: import.meta.env.VITE_GITHUB_URL || "https://github.com/"
        },
        {
            title: "More coming soon",
            description: "Shipping frequently — expect new drops, tools, and writeups.",
            href: import.meta.env.VITE_PORTFOLIO_URL || "https://github.com/"
        }
    ];

    const highlightStats = [
        { label: "Projects shipped", value: "20+" },
        { label: "Focus areas", value: "AI, UX, systems" },
        { label: "Now building", value: "CareerLift + space sims" }
    ];

    const socialLinks = [
        {
            label: "GitHub",
            href: import.meta.env.VITE_GITHUB_URL || "https://github.com/",
            icon: <SiGithub size={18} />
        },
        {
            label: "ArtStation",
            href: "https://www.artstation.com/Datronizer",
            icon: <SiArtstation size={18} />
        },
        {
            label: "LeetCode",
            href: "https://leetcode.com/u/Datronizer/",
            icon: <SiLeetcode size={18} />
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/tqc/",
            icon: <SiLinkedin size={18} />
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
        <div className="home-page">
            <div className="content-shell">
                <section className="hero-grid">
                    <div className="hero-card">
                        <div className="eyebrow">Product engineer & tinkerer</div>
                        <h1 className="hero-title">Building thoughtful tools with a playful edge.</h1>
                        <p className="lede">
                            I design, code, and ship interfaces that feel deliberate — from AI products to tiny simulations
                            that make you curious again.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-button" href="/resume">View resume</a>
                            <a className="ghost-button" href="mailto:siennatruong@trueongod.com">Say hello</a>
                        </div>
                        <div className="hero-stats">
                            {highlightStats.map(stat => (
                                <div className="stat-chip" key={stat.label}>
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="status-panel">
                        <div className="panel-header">
                            <span className="eyebrow">Live</span>
                            <span className="live-dot" />
                        </div>
                        <DiscordBox lanyardData={lanyard} />
                        <div className="panel-footer">
                            Powered by Discord + Lanyard. Refreshes every few seconds.
                        </div>
                    </div>
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
            </div>
        </div>
    );
}
