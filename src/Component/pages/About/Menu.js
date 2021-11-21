import React from "react";


const Menu = ({items}) => {

    return (


     <div className = 'row-top'>
          
         {items.map((menuItems) => {

         const {id,img, title, text, para} = menuItems;
         return (
                  <a href="/Abebe" className = 'link-card'> 
             <div className="card bg-white ">
             <div className=" image-cat">
                 <img className = 'image-1' src={img} alt="image" />
             </div>
             <div className="content ">
                 <h4 className = 'h4-title'>{title}</h4>
                 <h5 className = 'h5-title'>{text}</h5>
                 <p className = 'p-para'>{para}</p>
             </div>

             </div>
             </a>
 
         )
         })}
     </div>
    )
};
 

export default Menu