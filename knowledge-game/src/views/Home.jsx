import React from 'react';
import { Tab, Tabs } from "react-bootstrap";

import './Home.css'; 

import MySeasons from '../Components/MySeasons'
import AllSeasons from '../Components/AllSesons'

function Home(props)
{

    return(
        <Tabs className="home-nav-tabs" defaultActiveKey="my-seasons" id="uncontrolled-tab-example">
            <Tab eventKey="my-seasons" title="My Seasons">
                <MySeasons />
            </Tab>
            <Tab eventKey="all-seasons" title="All Seasons">
                <AllSeasons />
            </Tab>
        </Tabs>
    );

}export default Home;