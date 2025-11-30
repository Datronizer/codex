// import './App.css';
import { Nav, Navbar } from "react-bootstrap";
import "./AppNavBar.scss";

export function AppNavBar(props: { theme: "dark" | "light"; onToggleTheme: () => void; })
{
    return (
        <Navbar expand="lg" sticky="top" className="app-navbar" variant="dark">
            <div className="nav-sheen" aria-hidden />
            <div className="nav-inner">
                <Navbar.Brand href={`/`} aria-label="Homepage" className="brand">
                    TrueOnGod
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="nav-links">
                        <Nav.Link href={`/about`}>About</Nav.Link>
                        <Nav.Link href={`/about/site`}>Blog</Nav.Link>
                        <Nav.Link href={`/hex`}>Tools</Nav.Link>
                        <Nav.Link href={`/resume`}>Resume</Nav.Link>
                    </Nav>
                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={props.onToggleTheme} aria-label="Toggle theme">
                            {props.theme === "dark" ? "Light mode" : "Dark mode"}
                        </button>
                        <a className="nav-cta" href="mailto:siennatruong@trueongod.com">Contact</a>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
