import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from "@material-ui/core";

const Footer = () => <>
        <Grid container justify="center" style={{minHeight: "212px"}}>
            <Grid container item sm={6} xs={11} justify="space-between">
                <Grid item sm={5} xs={12}>
                </Grid>
                <Grid item sm={5} xs={11}>
                </Grid>
            </Grid>
        </Grid>
        <AppBar position="static" elevation={0} component="footer" variant="fullWidth">
            <Toolbar style={{ justifyContent: "space-between", display: 'block'}}>
              <Typography>Email Us: info@avspllc.com</Typography>
              <Typography>Phone Number: (510)445-4392</Typography>
                <Typography variant="caption">©2022</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;