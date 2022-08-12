import React from "react";
import Button from 'react-bootstrap/Button';
import "./SignupForm.css"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="signup-form">
                <h2>Sign Up</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <div style={{"textAlign":"center"}}>
                        <Button>Sign Up</Button>
                    </div>
                    <Form.Text>
                        <Link style={{"color":"white","marginTop":"10%"}} to="/login">Already have an account? Log In</Link>
                    </Form.Text>
                </Form>
            </div>
        )

    }

}


export default SignupForm;