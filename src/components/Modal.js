import React from 'react';

import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { grey, deepOrange } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AppDatapicker } from './Datapicker';

export const AppModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        aria-label="add"
        sx={{
          backgroundColor: deepOrange[500],
          position: 'fixed',
          right: 50,
          bottom: 50,
          color: grey[50]
        }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{'Выберите дату!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Я крутое модальное окно!
          </DialogContentText>
          <AppDatapicker />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Окей!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
