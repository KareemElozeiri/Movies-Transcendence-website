import React from "react";
import GuestNavbar from "../../components/guest-navbar/GuestNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../../components/footer/Footer"
import "./GuestPage.css"

class GuestPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="guest-page bg-dark">
                <GuestNavbar/>
                <img alt="background" src="/images/home0.jpg"/>
                <p className="text-1"> Explore All Movies & Get Recommendations </p>
                <button className="login-btn btn">Login</button>
                <button className="signup-btn btn">Sign Up</button>
                <Footer />
            </div>
        );
    }

}

export default GuestPage;