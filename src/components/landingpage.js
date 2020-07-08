import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img1 from '../components/LS.png';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
class LandingPage extends Component {
    render() {
        Aos.init({
           
          });
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                <div data-aos="zoom-in"  data-aos-duration="3000">   <Link  to="./resume"><img src={img1}
                            alt="avatar" style={{width:'320px', height:'320px'}}
                            className="avatar-image"/></Link></div> 
                        <div className="banner-text">
                            <div data-aos="zoom-in"  data-aos-duration="3000"><h2 style={{color:'white',fontFamily: 'Roboto Mono,monospace', fontSize:34, marginTop:-35}}>#PROUDTOPLAY</h2></div>

                            
                           
                             <div className="social-links">
                                {/* Linkedin */}
                              
                              <a href="https://www.instagram.com/lgbtsportmagazine/" rel="noopener noreferrer" target="_black">
                              <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                                {/* GitHub */}
                                
                                  <a href="mailto:lgbtsportmagazine@gmail.com" rel="noopener noreferrer" target="_black">
                                  <i className="fa fa-envelope" aria-hidden="true" />
                                  </a>
                                  </div>
                            </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;