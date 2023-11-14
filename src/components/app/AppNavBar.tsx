import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/AppNavBar.css';

export function AppNavBar(props: {})
{
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >

            <Navbar.Collapse id="navbarNavAltMarkup" className="center-nav">
                <Nav>
                    <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/`}>Home</Nav.Link>
                    <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/about`}>About</Nav.Link>

                    <Navbar.Brand href={`${process.env.PUBLIC_URL}/#/`}>
                        {/* <img id="navbar-logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="" height="32" /> */}
                        TrueOnGod
                    </Navbar.Brand>
                    
                    <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/hex`}>Tools</Nav.Link>
                    <Nav.Link className="active" href={`${process.env.PUBLIC_URL}/#/resume`}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}
