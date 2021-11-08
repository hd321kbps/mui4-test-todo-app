import React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import { AppForm } from './Form';
export const AppPopover = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onAdd = (item) => {
    const itemsList = props.items;
    itemsList.push(item);
    props.onAdd(itemsList);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: '20px' }}
        onClick={handleClick}
      >
        Добавить элемент
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <AppForm onAdd={onAdd} />
      </Popover>
    </>
  );
};
