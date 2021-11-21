import React, { useState} from "react";
  
 import Menu from "./Menu";
 import items from "./data";
//import { line } from "./data";


function HomeComponent() {
    const [menuItems,setMenuItem] =  useState(items)
    return (
          <> 
          <section className = 'bg-white'> 
          <div className="container">
           <div className="row">
             <div className="col-lg-6 col-md-12 col-sm-12 first">
               With We Camaign, You can run Campaigns shar them with World
               <h1 className = 'uppercase'>Campaign With us and Reach Your Goals</h1>
               <a href="Sign"> 
               <button className = 'button'>Run a Campaign</button>
               </a>
                      
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 sound">
               <img className = 'sound-img' src="https://wecampaign.herokuapp.com/static/media/megaphone.a9a31546.png" alt="" />
                      
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 image ">
               <img className = ' mobo' src=" https://wecampaign.herokuapp.com/static/media/statictics.966d0dcd.png" alt="" />
                      
              </div>
                 
              <div className="col-lg-6 col-md-12 col-sm-12 home-display ">
                  <div  className = 'small-size' > 
                <Menu className = 'ufaaaaaa' items = {menuItems}></Menu>
                 </div>
                <div className = 'card-img'> 
                <img className = 'card-image' src="https://wecampaign.herokuapp.com/static/media/darkGraph.906b80ef.png" alt="" />
                </div>
              </div>
               
               </div>
             </div>
             </section>
              <section className = 'bg-white'>
        <div className="footer container">
            <ul className = 'ul-footer'>
                <li className = 'list'>
                 follow us !
                </li>
                <li className = 'link'>
                  <a className = 'sty' href="#">Facebook</a>
                </li>
                <li className = 'link'>
                  <a className = 'sty' href="#">Twitter</a>
                </li>
            </ul>
            <ul className = 'ul-footer'>
                <li className = 'list' >
                  get in touch!
                </li>
                <li className = 'link'>
                  8080252548
                </li>
                <li className = 'link'>
                  Wecampaign@gmail.com
                </li>
            </ul>
        </div>

             </section>
              
              </>
    )
}

export default HomeComponent