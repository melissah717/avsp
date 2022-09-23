import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Background from "../images/background.jpeg"
import Installation from '../images/installation.jpeg'
import Service from '../images/servicePic.jpeg'


const styles = theme => ({
  layout: {
    width: 'auto',
    minHeight: '90vh',
    paddingTop: 50,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    backgroundColor: "black",
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 6,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 6,
  },
  card: {
    display: 'flex',
    backgroundColor: 'black',
    color: theme.palette.common.white,
    margin: 5,
    height: '20rem',
    border: '5px solid black'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
});


const featuredPosts = [
  {
    title: 'Service and Support',
    description:
      ' Experienced service andaround the clock technical support. Experienced service andaround the clock technical support. Experienced service andaround the clock technical support. Experienced service andaround the clock technical support. Experienced service andaround the clock technical support.Experienced service andaround the clock technical support.',
    image:
      Service
  },
  {
    title: 'Installation and Integration',
    description:
      'Experienced installation of both software and hardware for various needs. Experienced installation of both software and hardware for various needs. Experienced installation of both software and hardware for various needs. Experienced installation of both software and hardware for various needs.Experienced installation of both software and hardware for various needs.Experienced installation of both software and hardware for various needs.',
    image: Installation
  },
];



function Services(props) {
  const { classes } = props;

  return (
    <div className={classes.layout}>
      {/* Main featured post */}
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="p" variant="h3" color="inherit" gutterBottom>
                Design and Engineering
              </Typography>
              <Typography variant="p" color="inherit" paragraph style={{justifyContent: 'center', overflow: 'none'}}>
                ASVP has experience designing audio visual ecosystems for clients with various needs.
                We use the latest design conventions to make your event unique and memorable.
                We use the latest design conventions to make your event unique and memorable.
                We use the latest design conventions to make your event unique and memorable.
                We use the latest design conventions to make your event unique and memorable.
                We use the latest design conventions to make your event unique and memorable.
                We use the latest design conventions to make your event unique and memorable.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className='serviceImage' >
              <img 
              alt="main"
              src="https://i.imgur.com/OZhRynF.jpeg" 
              style={{ 
                width: '700px', 
                paddingTop: 4, 
                paddingLeft: 45
                }}>
                </img>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/* End main featured post */}
      {/* Sub featured posts */}
      <Grid container spacing={50} className={classes.cardGrid}>
        {featuredPosts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="p" variant="h4">
                    {post.title}
                  </Typography>
                  <Typography variant="p" paragraph style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {post.description}
                  </Typography>
                  {/* <CardMedia
                    className={post.image}
                    image={post.image}
                    title="pictures" /> */}
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={post.image} // eslint-disable-line max-len
                  title="Image title"
                />
              </Hidden>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
}

export default withStyles(styles)(Services);