import * as React from 'react';
import { useState } from 'react';
import { Tabs, Tab, AppBar} from '@mui/material';
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";


// const tabs = ['About', 'Services', 'Clients', 'Contact'];

const Nav = () => {

    const [tab, setTab] = useState(0);

    const handleTab = (value) => {
        setTab(value);
        return;
    }
  return (
    <AppBar position="relative" elevation={3} style={{ backgroundColor: "white", borderRadius: 10, marginBottom: '10px'}}>
        <Typography variant='h2' 
        style={{
          textAlign:"center",
          border: '1px', 
          color: 'black',
          borderBottom: '1px black solid', 
          margin: '0 auto'
          }}>
            Audio Visual Service Providers
        </Typography>
        <Tabs 
          variant="standard"
          value={tab}
          onChange={handleTab}
          textColor="primary"
          indicatorColor='warning'
          centered
          style={{minWidth: '60%'}}
        >
          <div className="tabs" style={{color:"black", borderTop: '1px solid', marginTop: '4px'}}>
        <Tab label="About" component={ Link } to={'/About'} />
        <Tab label="Services" component={ Link } to={'/Services'}/>
        <Tab label="Clients" component={ Link } to={'/Clients'}/>
        <Tab label="Contact" component={ Link } to={'/Contact'}/>
        </div>
            </Tabs>
    </AppBar>
  );
};
export default Nav;
