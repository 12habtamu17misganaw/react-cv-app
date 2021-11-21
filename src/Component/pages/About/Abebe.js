import React from "react";
import { Avatar, Card, GridList } from "@material-ui/core";
import CardReview from "./CardReview"; 
import FooterCard from "./FooterCard";

const Abebe  = () => {

    return (
      <> 
    <div className = 'avatar-abebe'>
     <Avatar className ='avatar bg-black' ></Avatar>
      <h1 className = 'h1-abebe'>Abebe Amare</h1>
     <div className = 'avatar-titel'> 
         
         <h6 className ='p-para'>@test21</h6>
         
         <h5 className = 'h5-title'>i am Software Developer</h5>
         </div>
         <div className = 'container'> 
         <div className = 'tweet-emails '>
          <a href="#" className = 'twwwts-a'>Tweets</a>
          <a href="#" className = 'emails-a'> Emails</a>
        </div>
        </div>

     </div>
           <div className = 'current'><h6 className = 'h6-current'>Current Campaign Writing is not my</h6></div>
      <div>
       <CardReview />
      </div>
      <div className = 'recent'>
        <h6 className ='h6-recent'>Recent Campaign</h6>
      </div>
      <footer className = 'footer-abebe'>
       <FooterCard></FooterCard>
      </footer>
       
       
     </>
    )

}

export default Abebe