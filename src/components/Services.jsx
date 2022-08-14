import React from "react";
import { Grid } from "@material-ui/core";
import Stuff from "./Stuff";

export default function Services() {
  return (
    <Grid container>
      <Grid item>
      </Grid>
      <Grid item container style={{display: 'flex'}}>
        <Grid item xs={false} sm={0.5} />
        <Grid item xs={12} sm={10}>
          <Stuff />
        </Grid>
        <Grid item xs={false} sm={0.5} />
      </Grid>
    </Grid>
  );
};