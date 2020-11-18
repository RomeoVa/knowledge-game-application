/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIIDOUTPUT
	API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

const listSeasons = gql`
  query getSeasons {
    listSeasons {
      items {
        createdOn
        id
        duration
        title
        totalUsers
      }
    }
  }
`

app.get('/seasons', async function(req, res) {
  // Add your code here
  try {
    const graphqlData = await axios({
      url: process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIKEYOUTPUT
      },
      data: {
        query: print(listSeasons),
      }
    });

    const body = {
        graphqlData: graphqlData.data.data.listSeasons
    }

    res.json({message: 'get call succeed!', url: req.url, body:body});
  } catch (err) {
    console.log('error posting to appsync: ', err);
    res.json(500,{message: 'error', url: req.url});
  } 

});

app.get('/question', async function(req, res) {
  // Add your code here
  try {

    const getQuestions = gql`
      query getQuestions {
        listQuestions {
          items {
            answers {
              id
              label
            }
            category
            correct
            label
            id
          }
        }
      }
    `

    const graphqlData = await axios({
      url: process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIKEYOUTPUT
      },
      data: {
        query: print(getQuestions),
      }
    });

    const questions = graphqlData.data.data.listQuestions.items
    const id = Math.floor(Math.random() * questions.length)

    const body = {
      question: questions[id]
    }

    res.json({message: 'get call succeed!', url: req.url, body:body});
  } catch (err) {
    console.log('error posting to appsync: ', err);
    res.json(500,{message: 'error', url: req.url});
  } 

});


app.post('/my-seasons', async function(req, res) {
  // Add your code here
  try {

    const userId = req.body.userId
    
    const mySeasons = gql`
      query mySeasons {
        getUser(id: "${userId}") {
          seasons {
            items {
              score
              season {
                createdOn
                duration
                title
                totalUsers
                id
              }
            }
          }
        }
      }
    `

    const graphqlData = await axios({
      url: process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIKEYOUTPUT
      },
      data: {
        query: print(mySeasons),
      }
    });

    const body = {
        graphqlData: graphqlData.data.data.getUser
    }

    res.json({message: 'get call succeed!', url: req.url, body:body});
  } catch (err) {
    console.log('error posting to appsync: ', err);
    res.json(500,{message: 'error', url: req.url});
  } 

});

app.put('/join-season', async function(req, res) {
  // Add your code here
  try {

    const userId = req.body.userId
    const seasonId = req.body.seasonId
    
    const joinSeason = gql`
      mutation joinSeason {
        createUserSeason(input: {score: 0, seasonID: "${seasonId}", userID: "${userId}"}) {
          id
        }
      }
    `

    const graphqlData = await axios({
      url: process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_KNOWLEDGEGAMEGQLAPI_GRAPHQLAPIKEYOUTPUT
      },
      data: {
        query: print(joinSeason),
      }
    });

    const body = {
        graphqlData: graphqlData.data.data.createUserSeason
    }

    res.json({message: 'get call succeed!', url: req.url, body:body});
  } catch (err) {
    console.log('error posting to appsync: ', err);
    res.json(500,{message: 'error', url: req.url});
  } 

});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
