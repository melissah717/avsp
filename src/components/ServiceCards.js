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
      textAlign: "center", 
      border: "2px solid black", 
      padding: "5px"
    }} 
      elevation={4}>
      <CardHeader
        title={title}
      />
      <CardMedia style={{ height: "45vh"}} image={imageUrl} />
      <CardContent >
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button variant="outlined" disableElevation color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCards;