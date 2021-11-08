import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export const AppList = (props) => {
  return (
    <List>
      {props.items.map((item, index) => (
        <div key={index}>
          <ListItem disablePadding>
            <ListItemIcon>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={item.checked}
                onChange={(e) => props.onCheck(e, index)}
              />
            </ListItemIcon>
            <ListItemButton>
              <ListItemText primary={item.name} secondary={item.description} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};
