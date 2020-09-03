import React from 'react';
import Home from './HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './project';
import Resume from './resume';



const Main = () => (
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/aboutme" component={AboutMe} />
  <Route path="/contact" component={Contact} />
  <Route path="/resume" component={Resume} />
  <Route path="/Project" component={Projects} />
  <Route path="/Home" component={Home} />
    </Switch>
)
export default Main;
