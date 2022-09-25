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
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    backgroundColor: "black",
    border: '2px solid white',
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 12
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 20}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
    border: '1px solid pink'
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 6,
  },
  // cardContent: {
  //   display: 'flex',
  //   padding: `${theme.spacing.unit * 4}px`,
  //   [theme.breakpoints.up('md')]: {
  //     paddingRight: 0,
  //   },
  // },
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
      'Technical failures can happen to even the most experienced users of technology. We strive to make your meeting spaces always available, while decreasing lost time due to technical issues. We offer aroundt the clock support to ensure our work stays running as it should. ',
    image:
      Service
  },
  {
    title: 'Installation and Integration',
    description:
      'Audio Visual installation is more complext than plugging things in. We build entire ecosystems that add depth and value to your organization\'s day to day needs. We hold our work to the highest standards. ',
    image: Installation
  },
];



function Services(props) {
  const { classes } = props;
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className={classes.layout}>
      {/* Main featured post */}
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent} style={{width: '35em', textAlign: 'left'}}>
              <Typography component="p" variant="h3" color="inherit" gutterBottom sx={{border: '20px double pink'}}>
                Design and Engineering
              </Typography>
              <Typography variant="p" color="inherit" paragraph gutterBottom sx={{textAlign: 'left', border: '1px solid white'}}>
                We focus on creative solutions to craft your conference rooms and meeting spaces by putting the needs and budget of our clients first. 
                After figuring out the intial plan, we collaborate with you ensure your audio and visual solutions are a success. 
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className='serviceImage' >
              <img 
              alt="main"
              src="https://i.imgur.com/65523GZ.png"
              style={{ 
                width: '100%', 
                paddingTop: '30px',
                paddingLeft: '30px',
                border: '1px solid white'
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