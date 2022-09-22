import React from "react";
import {
    AppBar,
} from "@material-ui/core";


const style = {
    backgroundColor: "black",
    textAlign: "center",
    bottom: 0,
    right: 0,
    left: 0,
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