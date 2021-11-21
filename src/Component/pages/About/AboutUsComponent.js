import React, {useState} from "react";
//import { line } from "./data";
//import items from "./Home/data";
import items from './data'
import item from "./data-1";
import Menu from "./Menu";
 import Data from "./Menu-1";
   
  
  
  

function AboutUsComponent() {
  const [AboutMenu, SetAboutMenu] = useState(items)
  const [AboutDta, setAboutData] = useState (item)
   
    return (
        <section className = 'bg-white'> 
        
             <div className = 'container'>

           <div className="col-12 mb-5 ">
             <div className="mb-3 col-4 pt-3 mx-auto text-center">
                 
                 <input type="text" className = 'from-control'placeholder = '   search...'> 
                       
                  </input>
             </div>
         </div>
              <div>
                <h2 className = 'bold'>Recent Campaigns</h2>
              </div>
             <div className = 'row card-abebe row-me'> 
             <div className =' col-lg-6 col-md-12 col-sm-12'>
               <Menu items = {AboutMenu}></Menu>
                 
             </div>
              <div className = 'col-lg-6 col-md-12 col-sm-12'>
              <Data item = {AboutDta} ></Data>
              </div>

             </div>
            </div>
            </section>
    )
}

export default AboutUsComponent