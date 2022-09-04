import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Background from "../images/background.jpeg"


const sectionStyle = {
    container: {
        content: ' "" ',
        backgroundImage: `url(${Background})`,
        height: '100vh',
        width: '100%',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        // opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '2px solid black'
    }
}
export default function About() {

    return (
        <React.Fragment>
            <Container
                style={sectionStyle.container}
                maxWidth={false}
            >
                <Paper sx={{
                    width: '50vw',
                    height: '50vh',
                    backgroundColor: 'black',
                    margin: '0 auto',
                    // opacity: 0.9,
                    // justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    position: 'fixed',
                    borderRadius: 4

                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        fontSize: '2vh',
                        padding: '1em',
                        color: 'white',
                        borderTop: '1px solid white',
                        borderBottom: '1px solid white'
                        
                    }}>
                        AVSP provides world class, scalable audio visual solutions for a variety of needs. We are located in the San Francisco Bay Area, 
                        at the heart of the Silicon Valley. We find ways to ingtegrate simple, elegant, and scalable designs, as well as efficient audio visual
                        needs to clients all across the country. From conferences to wedding powerpoints, let AVSP's expertise bring your meeting or event
                        to the next level. 
                    </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    );
}