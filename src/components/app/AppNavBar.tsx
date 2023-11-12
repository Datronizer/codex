import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function AppNavBar(props: {}) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                {/* <a className="navbar-brand" href="/">BRAND</a> */}
                <Navbar.Brand href={`${process.env.PUBLIC_URL}/#/`}>
                    <img id="navbar-logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="" height="32" />
                    True, On God
                </Navbar.Brand>
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav>
                        <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/about/website`}>Why Trueongod?</Nav.Link>
                        <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/hex`}>Hex Viewer</Nav.Link>
                        <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/about`}>About</Nav.Link>
                        <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/resume`}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}
