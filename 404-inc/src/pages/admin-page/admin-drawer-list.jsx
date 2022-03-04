import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';

const mainListItems = (
  <>
    <ListSubheader component="div" inset>
      Raw Data
    </ListSubheader>
    <NavLink to="/dashboard/subscribers" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Subscribers" />
      </ListItemButton>
    </NavLink>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Images" />
    </ListItemButton>
    <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItemButton>
        <ListItemIcon>
          <ArrowForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Go to Main" />
      </ListItemButton>
    </NavLink>
  </>
);

export default mainListItems;
