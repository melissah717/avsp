import React from "react";
import { Grid } from "@material-ui/core";
import serviceList from "./serviceList";
import ServiceCards from "./ServiceCards"

const Stuff = () => {
  const getServices = serviceList => {
    return (
      <Grid item xs={12} sm={5}>
        <ServiceCards {...serviceList} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={6}>
      {serviceList.map(serviceList => getServices(serviceList))}
    </Grid>
  );
};

export default Stuff;