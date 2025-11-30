// import './App.css';
import { Nav, Navbar } from "react-bootstrap";
import { LuMoon, LuSun } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import "./AppNavBar.scss";

export function AppNavBar(props: { theme: "dark" | "light"; onToggleTheme: () => void; })
{
    return (
        <Navbar expand="lg" sticky="top" className="app-navbar" variant="dark">
            <div className="nav-sheen" aria-hidden />
            <div className="nav-inner">
                <Navbar.Brand as={Link} to="/" aria-label="Homepage" className="brand">
                    TrueOnGod
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="nav-links">
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>About</NavLink>
                        <NavLink to="/about/site" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Blog</NavLink>
                        <NavLink to="/hex" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Tools</NavLink>
                        <NavLink to="/resume" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Resume</NavLink>
                    </Nav>
                    <div className="nav-actions">
                        <button className="theme-toggle" type="button" onClick={props.onToggleTheme} aria-label="Toggle theme">
                            {props.theme === "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
                        </button>
                        <a className="nav-cta" href="mailto:siennatruong@trueongod.com">Contact</a>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
