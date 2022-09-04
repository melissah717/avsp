import React from "react";
import { Grid, Box } from "@material-ui/core";
import Stuff from "./Stuff";
import backgroundImage from "../images/background.jpeg";

export default function Services() {
  return (
    <Box
    class='backgroundImage'
    style={{
      backgroundImage: `url(${backgroundImage})`,
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex', 
      position: 'fixed',
      backgroundSize: 'cover', 
      opacity: 0.8

    }}>
    <Grid container>
      <Grid item>
      </Grid>
      <Grid item container style={{display: 'flex'}}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Stuff />
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Grid>
    </Box>
  );
};