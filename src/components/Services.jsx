import React from "react";
import { Grid } from "@material-ui/core";
import Stuff from "./Stuff";

export default function Services() {
  return (
    <Grid container direction="column">
      <Grid item>
      </Grid>
      <Grid item container >
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Stuff />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};