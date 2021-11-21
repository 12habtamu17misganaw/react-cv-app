import React from "react";

import 'bootswatch/dist/slate/bootstrap.min.css';
import AboutUsComponent from "../pages/About/AboutUsComponent";
import Sign from "../pages/About/Sign-in";
 


function NavComponent() {

    return (

     <div className = 'topvar bg-white'> 
         <nav class="navbar navbar-expand-lg   navbar-1">
  <div class="container-fluid">
    <a class="navbar-brand bg-black" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav links">
        <li class="nav-item">
          <a class=" " aria-current="page" href="HomeComponent">Home</a>
        </li>
        <li class="nav-item ">
          <a class=" " href="AboutUsComponent">About</a>
        </li>
        <li class="nav-item">
          <a class=" " href="ContactUsComponent">Contact</a>
        </li>
          
      </ul>
             <ul className = ' nav-button '> 
            <a href= "Sign"    >
            <button className = 'nav-button'   > create Campaign</button>
          </a>
          </ul>
         
       
    </div>
     
  </div>
</nav>
</div>
    

    )}
    
export default NavComponent

































/*
import React, { useState, useRef, useEffect} from "react";

//import { Nav } from "react-bootstrap";
import { line } from "./data";
import { FaBars} from 'react-icons/fa';
import About from "./About";
//import logoo from '../img'
//import './About';
//import './Contact';
//import './project';
const Navbar = () => {
   const [showLine, setShowLine] = useState(false);
   const lineContainerRef = useRef(null)
   const lineRef = useRef(null);
   const toggleLines = () => {
       setShowLine (! showLine);
   };
   useEffect(()=> {
       const lineHeight =  lineRef.current.getBoundingClientRect().height;
       if (showLine) {
           lineContainerRef.current.style.height = `${lineHeight}px`
       } else {
           lineContainerRef.current.style.height = '0px'
       }
   }, [showLine]);

   return (
        <nav classNameName = 'nav-cetnter'>
        <div className = 'nav-header'>
            <button className ='nav-toggle' onClick = {toggleLines}>
                <FaBars/>
            </button>
        </div>
        <div ref = {lineContainerRef} className = 'links-container'>
            <ul ref = {lineRef} className ='links'>
            {line.map ((link) => {
                const {id, url, text} = link
                return (
                    <li key ={id}> <a href = {url}>{text}</a> </li>
                )
            })}




            </ul>
        </div>
    </nav>
)
}

 
    export default Navbar */