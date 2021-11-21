import React from "react";

 

const Menu = ({items}) => {
    return (
        <div>
            {items.map((menuItem) => {
                const {id, title, img, desc} = menuItem;
                return (

                    <div key= {id} className = 'card width-card mt-3 bg-black'>
                           
                        <img src={img} alt={title} className='photo' />
                         <div className = 'aza '>
                             
                             <h5 className = 'jurg'>{title}</h5>
                        <p className = 'para'> {desc}</p>
                        </div>
                              
                          
                          
                    </div>
                     
                )
            })}
        </div>
    )
}

export default  Menu