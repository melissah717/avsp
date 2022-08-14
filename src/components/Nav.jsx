import * as React from 'react';
import { useState } from 'react';
import { Tabs, Tab, AppBar} from '@mui/material';
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PeopleIcon from '@mui/icons-material/People';
import ContactMailIcon from '@mui/icons-material/ContactMail';


// const tabs = ['About', 'Services', 'Clients', 'Contact'];

const Nav = () => {

    const [tab, setTab] = useState(0);

    const handleTab = (value) => {
        setTab(value);
        return;
    }
  return (
    <AppBar 
    position="relative" 
    elevation={2} 
    style={{ 
      backgroundColor: "white", 
      borderRadius: 10, 
      marginBottom: '10px'
      }}>
        <Typography 
        variant='h1' 
        style={{
          textAlign:"center",
          border: '1px', 
          color: 'black',
          borderBottom: '1px black solid', 
          margin: '0 auto'
          }}>
            <span style={{color: "blue"}}>A</span>udio <span style={{color: "teal"}}>V</span>isual Service Providers
        </Typography>
        <Tabs 
          variant="fullWidth"
          value={tab}
          onChange={handleTab}
          textColor="primary"
          indicatorColor='warning'
          centered
          style={{minWidth: '80%'}}
        >
          <div className="tabs" style={{color:"black", borderTop: '1px solid black', marginTop: '4px'}}>
        <Tab label="About" component={ Link } to={'/About'} icon={<InfoIcon/>}/>
        <Tab label="Services" component={ Link } to={'/Services'} icon={<DesignServicesIcon/>}/>
        <Tab label="Clients" component={ Link } to={'/Clients'} icon={<PeopleIcon/>}/>
        <Tab label="Contact" component={ Link } to={'/Contact'}icon={<ContactMailIcon/>}/>
        </div>
            </Tabs>
    </AppBar>
  );
};
export default Nav;
