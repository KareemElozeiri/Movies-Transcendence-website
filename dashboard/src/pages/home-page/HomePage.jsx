import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from '../../components/user-navbar/UserNavbar';
import { Container} from 'react-bootstrap';
import "./HomePage.css"
import Footer from '../../components/footer/Footer';
import UserNavTabs from '../../components/user-nav-tabs/UserNavTabs';
import CardGrid from '../../components/card-grid/CardGrid';

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
                        content: (
                        <div>
                            <h1>Recommended Movies</h1>
                            <CardGrid length={100}/>
                        </div>)
                    },
                    {
                        eventKey: "liked",
                        title: "Liked Movies",
                        content: (<div >
                            <h1>Liked Movies</h1>
                            <CardGrid length={8}/>
                        </div>)
                    },
                    {
                        eventKey: "stream",
                        title: "Stream",
                        content: (<div style={{"height":"100vh"}}>
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
            <div className="home-page bg-dark ">
                <UserNavbar/>

                <UserNavTabs 
                    defaultActiveKey={this.state.userNavTabs.defaultActiveKey} 
                    tabs={this.state.userNavTabs.tabs}
                />
                <Footer/>
            </div>
        );

    }

}

export default HomePage;
