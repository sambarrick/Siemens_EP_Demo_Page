import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BarChartIcon from '@material-ui/icons/BarChart';
import NoteIcon from '@material-ui/icons/Note';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

export const mainListItems = (
  <div>
  
    <ListItem button>
    <Tooltip title="Dashboard">
      <ListItemIcon>
        <DashboardIcon />      
      </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
    <ListItem button>
    <Tooltip title="Sites">
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Sites" />
    </ListItem>
    
    <ListItem button>
    <Tooltip title="Clients">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Clients" />
    </ListItem>

    <ListItem button>
    <Tooltip title="Graphs">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Graphs" />
    </ListItem>

    <ListItem button>
    <Tooltip title="Reports">
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Reports" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
   
    <ListItem button>
    <Tooltip title="My Account">
    <ListItemIcon>
      <AccountBoxIcon/>
    </ListItemIcon>
    </Tooltip>
    <ListItemText primary="My Account" />
  </ListItem>

  <ListItem button>
  <Tooltip title="Settings">
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    </Tooltip>
    <ListItemText primary="Settings" />
  </ListItem>

  <ListItem button>
  <Tooltip title="Logout">
    <ListItemIcon>
      <ExitToAppIcon />
    </ListItemIcon>
    </Tooltip>
    <ListItemText primary="Logout" />
  </ListItem>

  </div>
);