import React from "react";
import {
    AppBar,
    Typography,
} from "@material-ui/core";


const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "3px solid #E7E7E7",
    textAlign: "left",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%", 
    color: 'black'
  };

const Footer = () => <>
        <AppBar position= "static" elevation={0} component="footer" variant="fullWidth" style={style}>
            {/* <Toolbar style={{ justifyContent: "space-between", display: 'block', fontSize: '20px'}}> */}
              <Typography variant="h5">Email Us: info@avspllc.com</Typography>
              <Typography variant="h6">Phone Number: (510)445-4392</Typography>
            {/* </Toolbar> */}
        </AppBar>
    </>

export default Footer;