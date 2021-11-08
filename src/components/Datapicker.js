import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import TextField from '@mui/material/TextField';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { AppSnackbar } from './Snackbar';

// TODO! Вынести AppSnackbar из Datapicker и запускает его кнопкой Окей
export const AppDatapicker = () => {
  const [value, setValue] = React.useState(new Date());

  const formatDate = new window.Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }).format(value);

  return (
    <div>
      <div>
        <AppSnackbar time={'' + value} />
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          inputFormat={formatDate}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
