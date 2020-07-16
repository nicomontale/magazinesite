import React from 'react';
import {Layout, Header, Navigation, Drawer, Content, } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            isOpen : false
        }
        
    }
    close() {
        var d = document.querySelector('.mdl-layout');
        d.MaterialLayout.toggleDrawer();
      }
   
      openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
    render() {
    
   
  return (
    
   
<div className="demo-big-content">
<Layout>
    <Header color="white" className="header-color" title={<Link style={{textDecoration: 'none', color:'white', fontFamily: 'Roboto Mono,monospace'}} to="/">#PROUDTOPLAY</Link>} sroll>
        <Navigation>
        <Link  style={{textDecoration:'white', color:'white', fontSize:'20px', fontFamily: 'Roboto Mono,monospace'}} to="/">HOME</Link>
        <Link style={{textDecoration:'white' ,fontSize:'20px', fontFamily: 'Roboto Mono,monospace' }} to="/news1">NEWSPAPER</Link>
            
           
          
        </Navigation>
    </Header>
    <Drawer color="white" style={{ color:'white !important', fontFamily: 'Roboto Mono,monospace'}} id="myNav" className="drawer-color"  title={<h3 onClick={()=>document.querySelector('.mdl-layout__drawer').addEventListener('click', this.close()) && this.openNav() } style={{textDecoration: 'none', color:'white', fontFamily: 'Roboto Mono,monospace',fontSize:'15px'}} to="/">#PROUDTOPLAY</h3>}>
        <Navigation className="mdl-navigation-drawer">
        <Link onClick={()=>document.querySelector('.mdl-layout__drawer').addEventListener('click', this.close())}  style={{textDecoration:'white', color:'white', fontSize:'20px', fontFamily: 'Roboto Mono,monospace'}} to="/">HOME</Link>
        <Link onClick={()=>document.querySelector('.mdl-layout__drawer').addEventListener('click', this.close())}  style={{textDecoration:'white',color:'white', fontSize:'20px', fontFamily: 'Roboto Mono,monospace'}} to="/news1">NEWSPAPER</Link>
        
        
        
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content" />
        <Main/>
    </Content>
</Layout>
</div>
  );
    }
}

export default App;