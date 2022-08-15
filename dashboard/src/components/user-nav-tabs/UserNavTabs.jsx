import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./UserNavTabs.css"

class UserNavTabs extends React.Component{

    constructor(props){
        super(props);
        this.state = {key:"hone"};
        console.log(props.defaultActiveKey)
    }

    render(){
        return(
            <div className='user-nav-tabs'>
                <Tabs defaultActiveKey={this.props.defaultActiveKey}  className="mb-3" justify>
                    {this.props.tabs.map((tab)=>(
                        <Tab eventKey={tab.eventKey} title={tab.title}>
                            {tab.content}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        );
    }


};

export default UserNavTabs;
