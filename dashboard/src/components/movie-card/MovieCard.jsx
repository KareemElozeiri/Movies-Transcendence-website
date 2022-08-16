import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import "./MovieCard.css"

class MovieCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Card bg="dark">
                <Card.Img variant="top" src={this.props.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.cardTitle}</Card.Title>                
                </Card.Body>
            </Card>
        );
    }
};

export default MovieCard;
