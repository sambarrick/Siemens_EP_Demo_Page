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
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoteIcon from '@material-ui/icons/Note';

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
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);