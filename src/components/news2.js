import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom';

export default class news2 extends Component {
    render() {
        Aos.init({})
        return (
            <Link to="/project2" style={{textDecoration:'none'}}>
            <div data-aos="zoom-in" data-aos-duration="3000" className="stylenews2">
            <div className="stylenews">
            <h1 className="authorList" style={{fontWeight:'solid bold', marginBottom: '0px',marginLeft:'0px',marginTop:'140px',fontSize:'35px',fontFamily: 'Roboto Mono,monospace'}}>Chris and Michael Malpartida </h1>
           <h3 className="authorList" style={{marginTop: '0px',borderRadius: '10px', fontSize: '20px',fontFamily: 'Roboto Mono,monospace'}}>BY CHRISTOPHER MALPARTIDA </h3>
            
            </div>
            </div>
            </Link>

           
            
        )
    }
}

