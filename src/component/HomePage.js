import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Smit from '../smit.jpg'

function Home() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="home-page">
    <Cell col={12}>
    <img src={Smit}alt="smit"

    className="smit-img"
     style={{ width: 200, height: 200, borderRadius: 200 / 2 }} />

   <div className="banner-text">
     <h1> Software Developer</h1>
     <hr/>
     <p> ReactJS | HTML/CSS | JavaScript | Java | MySql | Nodejs </p>

   <div className="social-link">

     {/*linkedin */}
     <a href="https://www.linkedin.com/in/smit-patel-b35898150/" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-linkedin-square" aria-hidden="true" />
     </a>

     {/*github*/}
     <a href="https://github.com/smit195" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square" aria-hidden="true" />
     </a>
   </div>
   </div>
    </Cell>
    </Grid>
    </div>
  )
}
export default Home;
