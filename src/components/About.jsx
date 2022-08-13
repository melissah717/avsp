import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import HomeImage from "../images/GVC.jpg"


const sectionStyle = {
    container: {
        content: ' "" ',
        backgroundImage: `url(${HomeImage})`,
        height: '60vh',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black'
    }
}
export default function About() {

    return (
        <React.Fragment>
            <Container
                style={sectionStyle.container}
                container
            >
                <Paper sx={{
                    width: '60%',
                    height: '40%',
                    backgroundColor: 'white',
                    margin: '0 auto',
                    // opacity: 0.9,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',

                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'black'
                        
                    }}>
                        AVSP provides world class, scalable audio visual solutions for a variety of needs. Need help with anything? We got you.
                        AVSP provides world class, scalable audio visual solutions for a variety of needs. Need help with anything? We got you.
                        AVSP provides world class, scalable audio visual solutions for a variety of needs. Need help with anything? We got you.
                        AVSP provides world class, scalable audio visual solutions for a variety of needs. Need help with anything? We got you.

                    </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    );
}