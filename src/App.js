//import React from "react"
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
//import { BrowerRouter as Router, Switch, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Main from './component/main';
import { Link } from 'react-router-dom';
import Style from './App.css'


function App() {
  return (
    <div>
{/* Uses a header that scrolls with the text, rather than staying locked at the top */}

<div className="demo-big-content">
   <Layout>
       <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'teal'}} to="/">SMIT</Link>} scroll>
           <Navigation>
               <Link style={{textDecoration: 'none', color: 'teal', fontSize:'1.1em'}} to="/resume">Resume</Link>
               <Link style={{textDecoration: 'none', color: 'teal', fontSize:'1.1em'}} to="/project">Project</Link>
               <Link style={{textDecoration: 'none', color: 'teal', fontSize:'1.1em'}} to="/aboutme">About Me</Link>
               <Link style={{textDecoration: 'none', color: 'teal', fontSize:'1.1em'}} to="/contact">Contact</Link>
           </Navigation>
       </Header>
       <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">SMIT</Link>}>
           <Navigation>
             <Link to="/resume">Resume</Link>
             <Link to="/project">Project</Link>
             <Link to="/aboutme">About Me</Link>
             <Link to="/contact">Contact</Link>
           </Navigation>
       </Drawer>
       <Content>
           <div className="page-content" />
           <Main/>
       </Content>
   </Layout>
</div>
    </div>

  )
}

export default App;
