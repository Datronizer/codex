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
                        Welcome to my site
                    </Col>
                    <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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