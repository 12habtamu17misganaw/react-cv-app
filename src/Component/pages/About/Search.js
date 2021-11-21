import React from "react";


const Search = ({fullitem} ) => {

return (
     
<div className="search">
    <input type="text" placeholder = "Search..." />
     {fullitem.map((val, key)=>{
          
     return <div className = 'bu'>{val.id}</div>

     })}
</div>
)
    
}


export default Search
