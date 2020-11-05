import React from 'react';
import { Container, Row, Col , Card, Button} from "react-bootstrap";

function MySeasons(props)
{

    return(
        <Container>
            <Row>
                <Col lg={3} md={4} sm={6} xs={12}>
                    <Card style={{ marginTop: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Season 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                    <Card style={{ marginTop: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Season 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}export default MySeasons;