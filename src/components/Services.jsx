import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Installation from '../images/installation.jpeg'
import Service from '../images/servicePic.jpeg'


const styles = theme => ({
  layout: {
    backgroundColor: '#e0e0e0',
    width: 'auto',
    minHeight: '90vh',
    paddingTop: 50,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: '1700',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    backgroundColor: "black",
    border: '2px solid white',
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
    margin: 2,
    height: '20rem',
    border: '2px solid white'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 350,
  },
});


const featuredPosts = [
  {
    title: 'Service and Support',
    description:
      'Anything can happen. While we pride ourselves on our work, we are also on hand to solve any problems that may arise in the present and in the future. The systems we ',
    image:
      Service
  },
  {
    title: 'Installation and Integration',
    description:
      'We use ',
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
                We work with you to transform meeting spaces into engaging and unique environments. We collaborate with your support staff to develop
                and implement a scalable project that is both simple and elegant. 
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className='serviceImage' >
              <img 
              alt="main"
              src="https://i.imgur.com/65523GZ.png"
              style={{ 
                width: '700px', 
                paddingTop: 4, 
                paddingLeft: '14em'
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
                  <Typography component="p" variant="h3">
                    {post.title}
                  </Typography>
                  <Typography variant="p" paragraph style={{display: 'flex', textAlign: 'left', justifyContent: 'center'}}>
                    {post.description}
                  </Typography>
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