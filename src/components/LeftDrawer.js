import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Icon from '@mui/material/Icon';
import { pink, lime, cyan, deepOrange, grey } from '@mui/material/colors';

export default function LeftDrawer() {
  const [state, setState] = React.useState({
    isOpen: false
  });

  const toggleDrawer = (open) => {
    setState({ isOpen: open });
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2, color: grey[50] }}
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.isOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <List sx={{ width: 250 }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon sx={{ color: pink[500] }} />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon sx={{ color: lime['A400'] }} />
            </ListItemIcon>
            <ListItemText primary="Контакты" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="О нас" />
            <ListItemIcon>
              <Icon sx={{ color: cyan[500] }}>help</Icon>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Написать нам" />
            <ListItemIcon>
              <Icon sx={{ color: deepOrange[500] }}>settings_phone</Icon>
            </ListItemIcon>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
}
