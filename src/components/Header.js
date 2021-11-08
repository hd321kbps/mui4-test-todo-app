import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';

import RightMenu from './RightMenu';
import LeftDrawer from './LeftDrawer';
export const AppHeader = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: indigo[700]
      }}
    >
      <Toolbar>
        <LeftDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MIUI Приложение!
        </Typography>
        <RightMenu />
      </Toolbar>
    </AppBar>
  );
};
