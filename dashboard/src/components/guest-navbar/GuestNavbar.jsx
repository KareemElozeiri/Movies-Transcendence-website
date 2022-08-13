import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./GuestNavbar.css"


class GuestNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Navbar className="navbar navbar-dark bg-dark border-bottom border-secondary" expand="lg">
                <Container>
                    <Navbar.Brand href="/"> <div className="logo-icon"> Movies Transcendence</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='guest-navbar-links"'>
                        <Nav className="justify-content-end" style={{ width: "100%",color: "#eb4034"}}>
                            <Nav.Link  href="/login">Log In</Nav.Link>
                            <Nav.Link  href="/signup">Sign Up</Nav.Link>
        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          );
    }

}

export default GuestNavbar;