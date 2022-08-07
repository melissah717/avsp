import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function Services() {
  return (
    <>
    <div className="servicesCard" style={{display:"flex", marginTop: "4vh"}}>
    <Card sx={{ minWidth: 300, padding: "2em", margin: "0px auto" }}>
      <CardContent>
      <Typography sx={{ fontSize: 30 }} color="secondary" gutterBottom>
          Design & Engineering
          <DesignServicesIcon/>
        </Typography>
        <Typography variant="h5" component="div">
            BIGGER FONT HERE
        </Typography>
        <Typography variant="body2">
            smaller font here subtitle
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Click here to learn more 
        (opens up a modal?)</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 300, padding: "2em", margin: "0px auto" }}>
      <CardContent>
      <Typography sx={{ fontSize: 30 }} color="secondary" gutterBottom>
          Installation & Integration
          <IntegrationInstructionsIcon />
        </Typography>
        <Typography variant="h5" component="div">
            asdfasdfasdfasdfasdfasdfasdfasdfs
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ minWidth: 300, padding: "2em", margin: "0px auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="secondary" gutterBottom>
          Service & Support 
          <ContactSupportIcon />
        </Typography>
        <Typography variant="h5" component="div">
            asdlfk;ajsdf;laskdfjas;dlkfjas;dflkasd
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}