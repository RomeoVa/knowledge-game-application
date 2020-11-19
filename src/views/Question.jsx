import React , { useState ,useEffect}from 'react';
import { Container, Row, Col , Card} from "react-bootstrap";
import { API } from 'aws-amplify';

import { onAuthUIStateChange } from '@aws-amplify/ui-components';


function Question(props)
{
    
    const [bet,setBet] = useState(0)
    const [question,setQuestion] = useState(0)
    const [res1,setRes1] = useState(0)
    const [res2,setRes2] = useState(0)
    const [res3,setRes3] = useState(0)
    const [res4,setRes4] = useState(0)
    const [score, setScore] = useState()
    const [userSeasonID, setUserSeasonID] = useState("")
    const [userID, setUserID] = useState("")
    const [seasonID, setSeasonID] = useState("")
    

    useEffect(() => {

        setSeasonID(props.match.params.id)
        
        API.get('knowledgeGameApi', '/question')
        .then(res => {
        
            setRes1(res.body.question.answers[0])
            setRes2(res.body.question.answers[1])
            setRes3(res.body.question.answers[2])
            setRes4(res.body.question.answers[3])

            setQuestion(res.body.question)
    
        })
        .catch(function (error) {
            console.log(error);
        });

        

        onAuthUIStateChange((nextAuthState, authData) => {
            
            setUserID(authData.attributes.sub)

            const body = {
            
                userId: authData.attributes.sub,
                seasonId:props.match.params.id
                
            }

            API.post('knowledgeGameApi', '/score',{body})
            .then(res => {

            
                if(res.body.graphqlData.seasons.items.length > 0){
                    setScore(res.body.graphqlData.seasons.items[0].score)
                    setUserSeasonID(res.body.graphqlData.seasons.items[0].id)
                }
            
        
            })
            .catch(function (error) {
                console.log(error);
            });
        });


  
    }, []);

    function updateScore(score){
        console.log(userID,userSeasonID,score)

        const body = {
            
            score: score,
            userSeasonId:userSeasonID
            
        }

        API.post('knowledgeGameApi', '/update-score',{body})
        .then(res => {

            
            console.log(res)
            console.log("hola")
        
    
        })
        .catch(function (error) {
            console.log(error);
        });

        API.get('knowledgeGameApi', '/question')
        .then(res => {
        
            setRes1(res.body.question.answers[0])
            setRes2(res.body.question.answers[1])
            setRes3(res.body.question.answers[2])
            setRes4(res.body.question.answers[3])

            setQuestion(res.body.question)
    
        })
        .catch(function (error) {
            console.log(error);
        });

    }


    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log('The link was clicked.');
        
        let scoreTemp = score
        
        if(e.target.value == question.correct){
            
            if(bet == 0){
                scoreTemp += 2
                setScore(scoreTemp)
            }else if(bet == 1){
                scoreTemp += 3
                setScore(scoreTemp)      
            }else{
                scoreTemp += 4
                setScore(scoreTemp)
            }

            updateScore(scoreTemp)

            alert("Correct")

            //setTimeout(window.location.reload(),10000)
        }else{
            
            if(bet == 0){
                
            }else if(bet == 1){
                scoreTemp -= 1
                setScore(score-1)
            }else{
                scoreTemp -= 2
                setScore(score-2)
            }
            
            updateScore(scoreTemp)

            alert("Incorrect")
            //setTimeout(window.location.reload(),10000)
        }
    }
    function handleInputChange(e) {
        e.preventDefault();
        console.log('Change',e.target.value);
        setBet(e.target.value)
    }

    return(
        
        <Container>
            <Row>
                <h3>{props.match.params.title} - Score: {score}</h3>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>How many points do you want to bet?</h3>
                    <form>
                        <input type="radio"  onChange={handleInputChange} id="0" name="bet" value="0"/>
                        <label for="0">0</label>
                        <br/>
                        <input type="radio" onChange={handleInputChange} id="1" name="bet" value="1"/>
                        <label for="1">1</label>
                        <br/>
                        <input type="radio" onChange={handleInputChange} id="2" name="bet" value="2"/>
                        <label for="2">2</label>
                        <br/>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>{question.category}</h3>
                    <h1>{question.label}</h1>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <Card value="1" style={{ marginTop: '1rem' ,height:'5rem'}}>
                        <button  value={res1.id} onClick={handleClick} style={{ height:'100%'}}>
                            {res1.label}
                        </button>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <Card style={{ marginTop: '1rem' ,height:'5rem'}}>
                        <button value={res2.id}  onClick={handleClick} style={{ height:'100%'}}>
                            {res2.label}
                        </button>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <Card style={{ marginTop: '1rem' ,height:'5rem'}}>
                        <button value={res3.id} onClick={handleClick} style={{ height:'100%'}}>
                            {res3.label}
                        </button>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                    <Card style={{ marginTop: '1rem' ,height:'5rem'}}>
                        <button value={res4.id} onClick={handleClick} style={{ height:'100%'}}>
                            {res4.label}
                        </button>
                    </Card>
                </Col>
            </Row>
        </Container>

    );

}export default Question;