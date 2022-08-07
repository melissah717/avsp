import * as React from 'react';
import { useState } from 'react';
import { Tabs, Tab, AppBar} from '@mui/material';
import { Link } from 'react-router-dom'


const tabs = ['About', 'Services', 'Clients', 'Contact'];

const Nav = () => {

    const [tab, setTab] = useState(1);

    const handleTab = (value) => {
        setTab(value);
        return;
    }
  return (
    <AppBar position="static">
        <h1 style={{textAlign:"center", color: ""}}>Audio Visual Service Providers, LLC</h1>
        <Tabs 
        selectionFollowsFocus
          variant="fullWidth"
          value={tab}
          onChange={handleTab}
          textColor="secondary"
          indicatorColor='warning-light'
          centered
        >
        <Tab label="About" component={ Link } to={'/About'}/>
        <Tab label="Services" component={ Link } to={'/Services'}/>
        <Tab label="Clients" component={ Link } to={'/Clients'}/>
        <Tab label="Contact" component={ Link } to={'/Contact'}/>
            {/* {tabs.map((tab) => (
                <Link 
                    style={{
                        textDecoration: "none", 
                        color: "white",
                        fontSize: "2rem",
                    }} 
                    to={`/${tab}`}>{tab}</Link>
                ))} */}
            </Tabs>
    </AppBar>
  );
};
export default Nav;
