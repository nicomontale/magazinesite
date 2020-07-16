import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom';

export default class news1 extends Component {
    render() {
        Aos.init({})
        return (
            <Link to="/project" style={{textDecoration:'none'}}>
            <div data-aos="zoom-in" data-aos-duration="3000" className="stylenews1">
            <div style={stylenews}>
            <h1 className="authorList" style={{fontWeight:'bold', marginBottom: '0px',marginLeft:'0px',marginTop:'140px',fontSize:'45px'}}>Ryan O'Callaghan</h1>
           <h3 className="authorList" style={{marginTop: '0px',borderRadius: '10px', fontSize: '25px'}}>BY LACEY YAHNKE</h3>
            
            </div>
            </div>
            </Link>
        )
    }
}
const stylenews= {
   
    color:'WHITE',
   
    padding:'0.9rem',
   
    borderRadius:'20px',
    
    textDecoration:'none'
   

}
