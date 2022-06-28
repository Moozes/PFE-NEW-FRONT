import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Notification from './Notification';


export default function ProdileNavbar(props) {


  return (
    <AppBar position="static"  >
    <Toolbar sx={{display: "flex", gap:2}} >
        <Button color="primary" variant="contained" sx={{flexGrow: 1}} >lesions</Button>
        <Button color="primary" variant="contained" sx={{flexGrow: 1}} >settings</Button>
    </Toolbar>
    </AppBar>
  )
}