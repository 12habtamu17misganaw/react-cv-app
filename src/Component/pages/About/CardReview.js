import React, {useState} from "react";
import  peopel from './TweetData'


const CardReview = () => {
    const [index, setIndex] = useState(0)
    const {id, para, button} = peopel[index]

    const checkNumber = (number) => {
        if (number > peopel.length - 1 ) {
            return 0;
        }
        if (number < 0) {
            return peopel.length -1
        }
        return number
    }

    const nextPerson = () => {
     setIndex ((index) => {
        let newIndex = index  +  1; 
        return checkNumber ( newIndex ) ; 
     })  
    };   
    const prevPerson = () => {
     setIndex ((index) => {
        let newIndex = index - 1;  
        return checkNumber ( newIndex );   
     })   
    }

    return (
         <section className = 'container'>
             <div className="row"> 
             <div className="col-lg-4 col-md-12 less-width-card"> 
             <div className="card card-id" key = {id}>
                 <div className = 'id'> {id}</div>
                 <div className = 'paragraph'>{para}</div>
                 <div className = 'btn-abebe'>{button}</div>
             </div>
             </div>
             </div>
             <div className = 'next-prev'>
                 <div> <button className = 'btn-prev' onClick = {prevPerson}>prev</button></div>
                 <div className = 'id-no'>{id}</div>
                  <div> <button className = 'btn-next'  onClick = {nextPerson} >next</button></div>
                 
                 
             </div>
         </section>
    )
}

export default CardReview