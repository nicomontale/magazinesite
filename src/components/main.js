import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';

import Project from './project';


const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/project" component={Project}/>
    
    </Switch>

)
export default Main;