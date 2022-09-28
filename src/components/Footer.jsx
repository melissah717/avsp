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
    height: "10vh",
    width: "100%", 
    color: 'white',
    position: 'static',
  };

function Footer(){
  return(
        <AppBar component="footer" style={style}>
              <p>Email Us: <a className="email-link" href="mailto: info@avspllc.com">info@avspllc.com </a><br />
              Phone Number: (510)445-4392</p>
        </AppBar>
  )
}
export default Footer;