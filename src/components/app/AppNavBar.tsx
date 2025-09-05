// import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import './AppNavBar.scss';

export function AppNavBar(props: {})
{
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
            <Navbar.Collapse id="navbarNavAltMarkup" className="center-nav">
                <Nav>
                    <Nav.Link className="active" href={`/about`}>About</Nav.Link>
                    <Nav.Link className="active" href={`/about/site`}>Blog</Nav.Link>

                    <Navbar.Brand href={`/`} aria-label="Homepage">
                        TrueOnGod
                    </Navbar.Brand>

                    <Nav.Link className="active" href={`/hex`}>Tools</Nav.Link>
                    <Nav.Link className="active" href={`/resume`}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}
