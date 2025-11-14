// import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import './AppNavBar.scss';
import { Link } from 'react-router-dom';

export function AppNavBar(props: {})
{
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
            <Navbar.Collapse id="navbarNavAltMarkup" className="center-nav">
                <Nav>
                    {/* <Link to="/" className="navbar-brand" aria-label="Homepage" /> */}
                    {/* <Link to="/about" className="nav-link">About</Link> */}

                    <Nav.Link href={`/about`}>About</Nav.Link>
                    <Nav.Link href={`/about/site`}>Blog</Nav.Link>

                    <Navbar.Brand href={`/`} aria-label="Homepage">
                        TrueOnGod
                    </Navbar.Brand>

                    <Nav.Link href={`/hex`}>Tools</Nav.Link>
                    <Nav.Link href={`/resume`}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}
