import React from "react";
import GuestNavbar from "../../components/guest-navbar/GuestNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../components/footer/Footer"
import "./SignUpPage.css"
import SignupForm from "../../components/signup-form/SignupForm";


class SignUpPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="login-page bg-dark">
                <GuestNavbar/>
                <img alt="background"  src="/images/home0.jpg"/>
                <SignupForm/>
                <Footer />
            </div>
        );
    }

}

export default SignUpPage;