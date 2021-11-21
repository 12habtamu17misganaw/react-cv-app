import { Grid, Paper, TextField } from "@material-ui/core";
import React from "react";


const Sign = () => {
    const paperStye = {padding : 20, height: '65vh', Width:280, margin: '20 auto'}

    return (
         <Grid>
         <Paper elevation = {10} style = {paperStye} className = 'elevation'>
           <Grid><h3>Sign in</h3></Grid>
            
            <form > 
                <div className = 'form-text-1'> 
                <h6 className = 'h6-form'>user name</h6>
                </div>
            <TextField id="outlined-basic"    variant="outlined" className = 'form' />
             
                 
              </form>
               

              <form > 
                  <div className="forget"> 
                <h6 className = 'h6-form'>password</h6>
                <a href="/" className = 'form-a'>forget your password ?</a>
                </div>
                
            <TextField id="outlined-basic" type = 'password'    variant="outlined" className = 'form' />

              </form>
              <div> 
         <button type = 'submit' className='button-form'> Sign in </button>
         </div>

         <div className="sign-up">
             <h6 className = 'h6-form'>New to We Campaign</h6>
             <a href="/"  className = 'form-a'>become a remamber</a>
         </div>

         </Paper>
         
         </Grid>
    )


}


export default Sign