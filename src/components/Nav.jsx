import * as React from 'react';
import { useState } from 'react';
import { Tabs, Tab, AppBar } from '@mui/material';
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PeopleIcon from '@mui/icons-material/People';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme1 = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans', 'san-serif'
    ].join(','),
  },
});


export default function Nav() {

  const [tab, setTab] = useState(0);

  const handleTab = (value) => {
    setTab(value);
    return;
  }

  return (
<>
      <AppBar
        position="static"
        elevation={2}
        style={{
          padding: 5,
          backgroundColor: "black",
          // borderRadius: 5,
          marginBottom: '1px',
          // opacity: '0.9'
        }}>
      <h1 className="header">

          Audio Visual Service Providers

        </h1>

        <Tabs
          // variant="fullWidth"
          value={tab}
          onChange={handleTab}
          textColor="white"
          indicatorColor='white'
          centered
          style={{ minWidth: 100 }}
        >
          <div className="tabs" style={{ color: "white" }}>
            <Tab label="About" component={Link} to={'/'} icon={<InfoIcon />} />
            <Tab label="Services" component={Link} to={'/Services'} icon={<DesignServicesIcon />} />
            <Tab label="Clients" component={Link} to={'/Clients'} icon={<PeopleIcon />} />
          </div>
        </Tabs>
      </AppBar>
      </>
  );
};

