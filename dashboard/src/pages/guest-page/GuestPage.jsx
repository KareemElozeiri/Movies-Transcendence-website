import React from "react";
import GuestNavbar from "../../components/guest-navbar/GuestNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../../components/footer/Footer"
import "./GuestPage.css"
import GuestPageCarousel from "../../components/guest-page-carousel/GuestPageCarousel";

class GuestPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="guest-page bg-dark">
                <GuestNavbar/>
                <div className="guest-page-content">
                    <GuestPageCarousel/>
                </div>

                <Footer />
            </div>
        );
    }

}

export default GuestPage;