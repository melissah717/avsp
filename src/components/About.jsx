import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Background from "../images/background.jpeg"


const sectionStyle = {
    container: {
        minHeight: '70vh',
        backgroundImage: `url(${Background})`,
        width: '99vw',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
                    width: '40vw',
                    height: '40vh',
                    backgroundColor: 'black',
                    margin: '0 auto',
                    alignItems: 'center',
                    display: 'flex',
                    position: 'static',
                    borderRadius: 5, 
                    border: '2px solid white'

                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        fontSize: '2vh',
                        padding: '1em',
                        color: 'white'
                        
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