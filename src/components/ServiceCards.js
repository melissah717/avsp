import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";


const ServiceCards = props => {
  const { title, description, imageUrl } = props;
  return (
    <Card
    style=
    {{
      display: 'flex', 
      flexDirection: 'column',
      // justifyContent: 'space-between',
      marginTop: "20px", 
      textAlign: "left", 
      border: "2px solid black", 
      padding: "5px",
      height: "500px",
    }} 
      elevation={3}>
      <CardHeader
        title={title}
        style={{textAlign: 'center', fontFamily: 'Josefin Sans, sans-serif'}}
      />
      <CardMedia style={{ minHeight: "250px"}} image={imageUrl} />
      <CardContent >
        <p className="card-body">
          {description}
        </p>
      </CardContent>
      <CardActions style={{justifyContent: 'center', position: 'static'}}>
        <Button variant="outlined" disableElevation>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCards;