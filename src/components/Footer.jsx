import React from "react";
import {
    AppBar,
    Typography,
} from "@material-ui/core";


const style = {
    backgroundColor: "black",
    borderRadius: 5,
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    height: "14vh",
    width: "100%", 
    color: 'white',
    // opacity: 0.95,
    padding: '1em'
  };

function Footer(){
  return(
        <AppBar position= "static" component="footer" style={style}>
              <p className='footer'>Email Us: <a className="email-link" href="mailto: info@avspllc.com">info@avspllc.com </a><br />
              Phone Number: (510)445-4392</p>
        </AppBar>
  )
}
export default Footer;