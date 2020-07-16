import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import News1 from '../news1';
import Project from './project';


const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/news1" component={News1}/>
    </Switch>

)
export default Main;