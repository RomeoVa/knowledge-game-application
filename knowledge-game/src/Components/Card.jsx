import React, { useState ,useEffect} from 'react';
import { Container, Row, Col , Card, Button} from "react-bootstrap";

function Card(props)
{
        

    return(
    
        <Col lg={3} md={4} sm={6} xs={12}>
            <Card style={{ marginTop: '1rem' }}>
                <Card.Body>
                    <Card.Title>Season 1</Card.Title>
                    <Card.Text>
                        <p>Total users: {props.totalUsers}</p>
                        <p>Expire: {props.createdOn + props.duration}</p>
                    </Card.Text>
                    <Button variant="primary">Join</Button>
                </Card.Body>
            </Card>
        </Col>
            
    );

}export default Card;