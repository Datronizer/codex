import { Col, Container, Row } from "react-bootstrap";
import { LuArrowUpRight } from "react-icons/lu";
import { SiArtstation, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import "./Footer.scss";
import { Link } from "react-router-dom";

export function Footer()
{
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col>
                        Thanks for dropping by.
                    </Col>
                    <Col>
                        I share what I'm building across AI tools, simulations, and design systems. If something sparks an idea, let's collaborate.
                    </Col>
                </Row>
                <Row className="footer-external-links">
                    <Col>
                        <button className="footer-external-link-button" onClick={() => window.open("https://github.com/Datronizer", "_blank")}>
                            <span><SiGithub size={25} /> GitHub</span>
                            <LuArrowUpRight size={25} />
                        </button>
                    </Col>
                    <Col>
                        <button className="footer-external-link-button" onClick={() => window.open("https://www.artstation.com/Datronizer", "_blank")}>
                            <span><SiArtstation size={25} /> ArtStation</span>
                            <LuArrowUpRight size={25} />
                        </button>
                    </Col>
                    <Col>
                        <button className="footer-external-link-button" onClick={() => window.open("https://leetcode.com/u/Datronizer/", "_blank")}>
                            <span><SiLeetcode size={25} /> LeetCode</span>
                            <LuArrowUpRight size={25} />
                        </button>
                    </Col>
                    <Col>
                        <button className="footer-external-link-button" onClick={() => window.open("https://www.linkedin.com/in/tqc/", "_blank")}>
                            <span><SiLinkedin size={25} /> LinkedIn</span>
                            <LuArrowUpRight size={25} />
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        &copy; 2024 Sienna Truong
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}
