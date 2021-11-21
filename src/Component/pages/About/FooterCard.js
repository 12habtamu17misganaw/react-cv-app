import React, {useState} from "react";
import ReactPaginate from "react-paginate";
import FooterData from "./FooterData";


const FooterCard =  ()=>{
  const [users, setUser] = useState(FooterData.slice(0,30));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3
  const pagesVisited = pageNumber * usersPerPage
  const displayUser = users.slice(pagesVisited, pagesVisited + usersPerPage).map(user =>{
   return (
   <section className = 'container display-footer '>
        <a className = 'a-footer'  href="#"> 
       <div className="card footer-card"> 
      <div><h6 className = 'h6-footer'>{user.titel}</h6></div>
      <div><h6 className = 'date-footer'>{user.date}</h6></div>
      <div><p className = 'p-footer'>{user.para}</p></div>
 
      </div>
      </a>
   </section>


   )
     
  })

  const pageCount = Math.ceil (users.length / 1);
  const changePage = ({ selected }) => {
      setPageNumber(selected)
  }


  return (  
      <>
   
  <div className = 'display'>{displayUser} </div> 
     <div className = ' footer-next container'> 
     <ReactPaginate
     previousLabel = {"Prev"}
     nextLabel = {"Next"}
     pageCount = {pageCount}
     onPageChange = {changePage}
     containerClassName = {"paginationBttns"}
     previousLinkClassName = {"previousBttn"}
     nextLinkClassName = {"nextBttn"}
     disabledClassName = {"paginationDisabled"}
     activeClassName = {"paginationActive"}
     />
     </div>
      
     </>
  )
  
  
  
  
   
    
}

export default FooterCard