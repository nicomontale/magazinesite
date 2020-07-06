import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img1 from '../components/LS.png';
import {Link} from 'react-router-dom';
class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <Link to="./resume"><img src={img1}
                            alt="avatar" style={{width:'320px', height:'320px'}}
                            className="avatar-image"/></Link>
                        <div className="banner-text">
                            <h2 style={{color:'white',fontFamily: 'Roboto Mono,monospace', fontSize:34, marginTop:-35}}>#PROUDTOPLAY</h2>

                            
                           
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/nicola-montaleone-7a3202194/" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/nicomontale" rel="noopener noreferrer" target="_black">
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