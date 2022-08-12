import React from "react";
import GuestNavbar from "../../components/guest-navbar/GuestNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../components/footer/Footer"
import "./LoginPage.css"
import LoginForm from "../../components/login-form/LoginForm";


class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="login-page bg-dark">
                <GuestNavbar/>
                <img alt="background"  src="/images/home0.jpg"/>
                <LoginForm className="page-form"/>
                <Footer />
            </div>
        );
    }

}

export default LoginPage;