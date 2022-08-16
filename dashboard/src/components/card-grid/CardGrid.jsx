import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import MovieCard from "../movie-card/MovieCard";

class CardGrid extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <Row  xs={2} md={3} className="g-4">
            {Array.from({ length: this.props.length }).map((_, idx) => (
                <Col>
                    <MovieCard cardTitle="Interstaller" imgSrc="interstaller.jpg"/>
                </Col>
            ))}
            </Row>
        );
    }
}

export default CardGrid;
