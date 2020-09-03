
import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import SmitPatel from '../SmitPatel.pdf'


class Contact extends Component {

  render() {
    return(

           <div className="layout-page">



             <body>

             <h1 style={{margin: '10%', textAlign: 'center', color: 'black'}}></h1>

             <Grid className="contact-box">

                 <Cell col={12}>

                   <div className="text-box">
                     <h1> let's connect </h1>
                     <h4>Smit Patel</h4>

                     <p style={{fontSize: '20px', fontFamily:'Raleway'}}> <i class="fa fa-envelope" aria-hidden="true"/>  Ismit.patel@outlook.com  </p>
                     <p style={{fontSize: '20px', fontFamily:'Raleway'}}> <i class="fa fa-phone-square" aria-hidden="true"/> (224)-600-7684 </p>
                       <div className="social-link">

                         {/*linkedin */}
                         <a href="https://www.linkedin.com/in/smit-patel-b35898150/" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-linkedin-square" style={{color:'#0e76a8'}} aria-hidden="true"/>
                         </a>

                         {/*github*/}
                         <a href="https://github.com/smit195" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-github-square"  style={{color:'#211F1F'}} aria-hidden="true" />
                         </a>




                          <a href={SmitPatel} target='_blank' download >
                          <img src="https://img.icons8.com/carbon-copy/100/000000/resume.png" alt="Resume" width="50" height="55" /> </a>


                       </div>

                   </div>

                 </Cell>

               </Grid>

             </body>

           </div>
    )
  }
}
export default Contact;
