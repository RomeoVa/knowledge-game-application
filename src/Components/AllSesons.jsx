import React, { useState ,useEffect} from 'react';
import { Container, Row, Col , Card, Button} from "react-bootstrap";
import { API } from 'aws-amplify';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

function AllSeasons(props)
{
    const [seasons, setSeasons] = useState([]);
    const [user, setUser] = useState();

    useEffect(() => {

        API.get('knowledgeGameApi', '/seasons')
        .then(res => {

            console.log(res)
            setSeasons(res.body.graphqlData.items);
    
        })
        .catch(function (error) {
            console.log(error);
        });

        onAuthUIStateChange((nextAuthState, authData) => {
            if(authData.attributes != null){
                setUser(authData.attributes.sub)
            }
        });
  
    }, []);


    function handleClick(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const body = {
            userId:user,
            seasonId: event.target.value
        }

        console.log(body)

        API.put('knowledgeGameApi', '/join-season', {body})
        .then(res => {
    
    
        })
        .catch(function (error) {
            console.log(error);
        });
        

    }
    
    const items = [];

    for(const i of seasons){
        items.push(
            <Col key={i.id} lg={3} md={4} sm={6} xs={12}>
                <Card style={{ marginTop: '1rem' }}>
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>
                            Total users: {i.totalUsers}
                            <br/>
                            Expires: {i.duration} days
                            <br/>
                            CreatedOn: {i.createdOn}
                        </Card.Text>
                        <Button disabled={i.disabled} value={i.id} onClick={handleClick} variant="primary">Join</Button>
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

}export default AllSeasons;