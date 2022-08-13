import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const sectionStyle = {
  container: {
      content: ' "" ',
      height: '60vh',
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'left',
  }
}
export default function Contact() {
  return (
    <div>
      <Container container style={sectionStyle}>
        <Paper sx={{
          width: '60%',
          height: '500px``',
          margin: '0 auto',
          justifyContent: 'left',
          alignItems: 'center',
          display: 'flex',
        }}>
          <Typography sx={{
            textAlign: 'lef t',
            color: 'black'

          }}>
            Email:<br />
            Address: <br />
            Phone Number<br />

          </Typography>
        </Paper>
      </Container>
    </div>
  );
}