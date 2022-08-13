import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserNavbar.css"
import {BsFillGearFill, BsBellFill} from "react-icons/bs";

class UserNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Navbar className="navbar navbar-dark bg-dark border-bottom border-secondary" expand="lg">
                <Container>
                    <Navbar.Brand href="/home"> <div className="logo-icon"> Movies Transcendence</div></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav" className=' user-navbar-links"'>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Navbar.Text className="navbar-text navbar-text-end">email@domain.com</Navbar.Text>
                            <Nav.Link href="/"><BsFillGearFill/></Nav.Link>
                            <Nav.Link href="/"><BsBellFill/></Nav.Link>
                            <Nav.Link href="/">Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          );
    }

}

export default UserNavbar;