import React, { Component } from 'react';
import NavComponent from './Component/common/NavComponent';
import {BrowserRouter as Router, Switch,Routes, Route} from 'react-router-dom'
import HomeComponent from './Component/pages/Home/HomeComponent';
//import AboutUsComponent from './Component/pages/About/AboutUsComponent';
import ContactUsComponent from './Component/pages/Contact/ContactUsComponent';
 import AboutUsComponent from './Component/pages/About/AboutUsComponent';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Sign from './Component/pages/About/Sign-in';
 import Abebe from './Component/pages/About/Abebe';
 
import {render} from 'react-dom';
  function App () {
  
      return (

        <Router> 
         
          <NavComponent>  </NavComponent>
           
               
            <Routes>
            <Route path = "/HomeComponent" element = { <HomeComponent /> }/>
             <Route path = "/AboutUsComponent" element = { <AboutUsComponent />}/>
             <Route path = "/ContactUsComponent" element = { <ContactUsComponent />}/>
             <Route path = "/Sign" element = { <Sign />}/>
             <Route path = "/Abebe" element = {<Abebe />} />
           </Routes>
           
        </Router>
      )
      }
  
export default App;
