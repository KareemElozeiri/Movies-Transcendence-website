import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from '../../components/user-navbar/UserNavbar';
import { Container } from 'react-bootstrap';
import "./HomePage.css"
import Footer from '../../components/footer/Footer';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="home-page bg-dark">
                <UserNavbar/>
                <Container className='home-content'>
                    {/**
                     * Here the content of the page based on the user action
                     * Options: Search results - Friends Recommendations - Liked Movies
                     *          Site Recommendations 
                     */
                    }
4
                </Container>
                <Footer/>
            </div>
        );

    }

}

export default HomePage;
