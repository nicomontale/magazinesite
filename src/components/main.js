import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import Listnews from './listnews';
import Project from './project';
import Project2 from './project2';


const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/project2" component={Project2}/>
    <Route exact path="/listnews" component={Listnews}/>
    </Switch>

)
export default Main;