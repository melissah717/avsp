import React from "react";
import {
    AppBar,
} from "@material-ui/core";


const style = {
    backgroundColor: "black",
    textAlign: "center",
    marginBottom: "0",
    height: "10vh",
    width: "100%", 
    color: 'white',
    position: 'static',
    marginTop: 'auto'
  };

function Footer(){
  return(
        <AppBar component="footer" style={style}>
              <p className="footer">Email Us: <a className="email-link" href="mailto: info@avspllc.com">info@avspllc.com </a><br />
              Phone Number: (510)445-4392</p>
        </AppBar>
  )
}
export default Footer;