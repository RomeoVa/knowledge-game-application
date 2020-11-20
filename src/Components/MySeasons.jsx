import React, { useState ,useEffect} from 'react';
import { Container, Row, Col , Card, Button} from "react-bootstrap";
import { API } from 'aws-amplify';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

function MySeasons(props)
{

    const [seasons, setSeasons] = useState([]);
    const [user, setUser] = useState();

    useEffect(() => {

        onAuthUIStateChange((nextAuthState, authData) => {

    
            if(authData){
                setUser(authData.attributes.sub)
            
            
                const body = {
                    userId:authData.attributes.sub
                }
            
                API.post('knowledgeGameApi', '/my-seasons', {body})
                .then(res => {
        
                    setSeasons(res.body.graphqlData.seasons.items);
                    console.log(res)
            
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        });

  
    }, []);


    const items = [];

    
    for(const i of seasons){
        items.push(
            <Col key={i.season.id} lg={3} md={4} sm={6} xs={12}>
                <Card style={{ marginTop: '1rem' }}>
                    <Card.Body>
                        <Card.Title>{i.season.title}</Card.Title>
                        <Card.Text>
                            Total users: {i.season.totalUsers}
                            <br/>
                            Expires: {i.season.duration} days
                            <br/>
                            CreatedOn: {i.season.createdOn}
                        </Card.Text>
                        <Button href={"/question/"+i.season.title+"/"+i.season.id} variant="primary">Play</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    return(
        <Container>
            <Row>
                {items}
            </Row>
        </Container>
    );

}export default MySeasons;