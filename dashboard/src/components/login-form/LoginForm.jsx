import React from "react";
import Button from 'react-bootstrap/Button';
import "./LoginForm.css"
import Form from 'react-bootstrap/Form';


class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="login-form">
                <h2>Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email or username" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div style={{"textAlign":"center"}}>
                        <Button>Login In</Button>
                    </div>
                </Form>
            </div>
        )

    }

}


export default LoginForm;