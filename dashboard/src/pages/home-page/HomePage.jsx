import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from '../../components/user-navbar/UserNavbar';
import { Container, Button } from 'react-bootstrap';
import "./HomePage.css"
import Footer from '../../components/footer/Footer';
import UserNavTabs from '../../components/user-nav-tabs/UserNavTabs';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userNavTabs:{
                defaultActiveKey:"recommended",
                tabs:[
                    {
                        eventKey: "recommended",
                        title: "Recommended Movies",
                        content: (<div>
                            <h1>Recommended Movies</h1>
                            <p>Here we will put recommended movies cards</p>
                        </div>)
                    },
                    {
                        eventKey: "liked",
                        title: "Liked Movies",
                        content: (<div>
                            <h1>Liked Movies</h1>
                            <p>Here we will put liked movies cards</p>
                        </div>)
                    },
                    {
                        eventKey: "stream",
                        title: "Stream",
                        content: (<div>
                            <h1>Stream</h1>
                            <p>here we will put posts by other users</p>
                        </div>)
                    }
                ]
            }
        }
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
                    <UserNavTabs defaultActiveKey={this.state.userNavTabs.defaultActiveKey} 
                                 tabs={this.state.userNavTabs.tabs}/>
4                    
                </Container>
                <Footer/>
            </div>
        );

    }

}

export default HomePage;
