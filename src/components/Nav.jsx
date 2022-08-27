import * as React from 'react';
import { useState } from 'react';
import { Tabs, Tab, AppBar} from '@mui/material';
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PeopleIcon from '@mui/icons-material/People';



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
      backgroundColor: "black", 
      borderRadius: 10, 
      marginBottom: '10px',
      opacity: '0.8'
      }}>
        <Typography 
        variant='h3' 
        style={{
          textAlign:"center",
          border: '1px', 
          color: 'white'
          }}>
            <span style={{color: "skyblue"}}>A</span>udio <span style={{color: "skyblue"}}>V</span>isual Service Providers
        </Typography>
        <Tabs 
          variant="fullWidth"
          value={tab}
          onChange={handleTab}
          textColor="white"
          indicatorColor='white'
          centered
          style={{minWidth: '80%'}}
        >
          <div className="tabs" style={{color:"skyblue", borderTop: '1px solid black', marginTop: '4px'}}>
        <Tab label="About" component={ Link } to={'/About'} icon={<InfoIcon/>}/>
        <Tab label="Services" component={ Link } to={'/Services'} icon={<DesignServicesIcon/>}/>
        <Tab label="Clients" component={ Link } to={'/Clients'} icon={<PeopleIcon/>}/>
        </div>
            </Tabs>
    </AppBar>
  );
};
export default Nav;
