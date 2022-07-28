import React from "react";
import react from "react-dom"
import GuestNavbar from "../../components/guest-navbar/GuestNavbar";


class GuestPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="guest-page">
                <GuestNavbar/>
            </div>
        );
    }

}

export default GuestPage;