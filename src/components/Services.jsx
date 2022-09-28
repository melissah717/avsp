import React from 'react';
import { Grid, Container, Card } from "@mui/material"

const cardStyle = {
  backgroundColor: 'black',
  color: 'white',
  height: '50vh',
  margin: '1rem',
}

const pictureStyle = {
  margin: '1rem',
  height: '50vh'
}


const headerStyle={
  textAlign: 'center',
  marginTop: '6vh',
  fontSize: '4.5vh',
  minWidth: '80%',
  maxWidth: '100%'
}



export default function Services(){
  return(
    <Container style={{
      maxWidth: '100%'
    }}
    disableGutters>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Card style={cardStyle}>
          <h2 style={headerStyle}>Designing <span className="deco">//</span> Engineering</h2>
          <p className="service-paragraph">
            We focus on creative solutions to craft your conference rooms and meeting spaces by putting the needs and budget of our clients first. 
            After figuring out the intial plan, we collaborate with you ensure your audio and visual solutions are a success. 
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm ={6}>
        <Card style={pictureStyle} className="picture-card" elevation={0}>
          <img src="https://i.imgur.com/65523GZ.png" alt="design picture" className="service-pictures"></img>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} order={{xs: 4, sm: 3, md: 3}}>
      <Card style={pictureStyle} className="picture-card" elevation={0}>
          <img src="https://i.imgur.com/210e3hJ.jpeg" alt="support picture" className="service-pictures"></img>
        </Card>
      </Grid>

      <Grid item xs={12} sm = {6} order={{xs: 3, sm: 4, md: 4}}>
        <Card style={cardStyle}>
          <h2 style={headerStyle}>Service <span className="deco">//</span> Troubleshoot</h2>
          <p className="service-paragraph">
          Technical failures can happen to even the most experienced users of technology. We strive to make your meeting spaces always available, while decreasing lost time due to technical issues. We offer aroundt the clock support to ensure our work, and your event, stays running as it should.
          </p>
        </Card>
      </Grid>  

      <Grid item xs={12} sm={6} order={{xs: 5}}>
        <Card style={cardStyle}>
          <h2 style={headerStyle}>Installation <span className="deco">//</span> Integration</h2>
          <p className="service-paragraph">
          Audio Visual installation is more complex than connecting some wires. We build entire ecosystems that add depth and value to your organization's day to day needs. We hold our work to the highest standards - we blend innovative technology and ingenuity to create masterpieces of installation.
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm = {6} order={{ xs: 6}}>
      <Card style={pictureStyle} className="picture-card" elevation={0}>
          <img src="https://i.imgur.com/cODhsMa.jpeg" alt="installation picture" className="service-pictures"></img>
      </Card>
      </Grid>  
    </Grid>
    </Container>
  )
}










// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';
// import Installation from '../images/installation.jpeg'
// import Service from '../images/servicePic.jpeg'

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// let theme = createTheme();  
// const styles = theme => ({
//   layout: {
//     backgroundColor: '#e0e0e0',
//     width: 'auto',
//     minHeight: '90vh',
//     paddingTop: 50,
//     marginBottom: 40,
//     marginLeft: theme.spacing.unit * 2,
//     marginRight: theme.spacing.unit * 2,
//     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//       width: '95%',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   mainFeaturedPost: {
//     backgroundColor: "black",
//     color: theme.palette.common.white,
//     marginBottom: theme.spacing.unit * 2
//   },
//   mainFeaturedPostContent: {
//     padding: `${theme.spacing.unit * 20}px`,
//     [theme.breakpoints.up('md')]: {
//       paddingRight: 0,
//     },
//   },
//   mainGrid: {
//     marginTop: theme.spacing.unit * 6,
//   },
//   // cardContent: {
//   //   display: 'flex',
//   //   padding: `${theme.spacing.unit * 4}px`,
//   //   [theme.breakpoints.up('md')]: {
//   //     paddingRight: 0,
//   //   },
//   // },
//   card: {
//     display: 'flex',
//     backgroundColor: 'black',
//     color: theme.palette.common.white,
//     margin: 0.4,
//     height: '60vh',
//   },
//   cardDetails: {
//     flex: 1,
//     maxWidth: "400px"
//   },
//   cardMedia: {
//     width: 500,
//     margin: '20px'
//   },
// });


// const featuredPosts = [
//   {
//     title: 'Service and Support',
//     description:
//       'Technical failures can happen to even the most experienced users of technology. We strive to make your meeting spaces always available, while decreasing lost time due to technical issues. We offer aroundt the clock support to ensure our work, and your event, stays running as it should. ',
//     image:
//       Service
//   },
//   {
//     title: 'Installation and Integration',
//     description:
//       'Audio Visual installation is more complex than connecting some wires. We build entire ecosystems that add depth and value to your organization\'s day to day needs. We hold our work to the highest standards - we blend innovative technology and ingenuity to create masterpieces of installation.',
//     image: Installation
//   },
// ];



// function Services(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.layout}>
//       {/* Main featured post */}
//       <Paper className={classes.mainFeaturedPost}>
//         <Grid container>
//           <Grid item md={6}>
//             <div className={classes.mainFeaturedPostContent} style={{width: '35em', textAlign: 'left'}}>
//               <Typography variant="h3" color="inherit" gutterBottom>
//                 Design and Engineering
//               </Typography>
//               <Typography variant="p" color="inherit" paragraph>
//                 We focus on creative solutions to craft your conference rooms and meeting spaces by putting the needs and budget of our clients first. 
//                 After figuring out the intial plan, we collaborate with you ensure your audio and visual solutions are a success. 
//               </Typography>
//             </div>
//           </Grid>
//           <Grid item md={6}>
//             <div className='serviceImage'>
//               <img 
//               alt="main"
//               src="https://i.imgur.com/65523GZ.png">
//                 </img>
//             </div>
//           </Grid>
//         </Grid>
//       </Paper>
//       {/* End main featured post */}
//       {/* Sub featured posts */}
//       <Grid container spacing={50} className={classes.cardGrid}>
//         {featuredPosts.map(post => (
//           <Grid item key={post.title} xs={12} md={6}>
//             <Card className={classes.card}>
//               <div className={classes.cardDetails}>
//                 <CardContent>
//                   <h3>
//                     {post.title}
//                   </h3>
//                   <p>
//                     {post.description}
//                   </p>
//                 </CardContent>
//               </div>
//               <Hidden xsDown>
//                 <CardMedia
//                   className={classes.cardMedia}
//                   image={post.image} // eslint-disable-line max-len
//                   title="Image title"
//                 />
//               </Hidden>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
      
//     </div>
//   );
// }

// export default withStyles(styles)(Services);