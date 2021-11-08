import React from 'react';
import Button from '@mui/material/Button';

import Icon from '@mui/material/Icon';

import { red, grey } from '@mui/material/colors';

export const AppButtons = (props) => {
  return (
    <div style={{ marginBottom: 40 }}>
      {props.itemsChecked.length === 0 ? (
        <Button
          variant="contained"
          sx={{
            marginRight: '20px',
            backgroundColor: red[700],
            color: grey[50]
          }}
          disabled
        >
          Удалить выбранные элементы
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            marginRight: '20px',
            backgroundColor: red[700],
            color: grey[50]
          }}
          onClick={() => props.onDelete()}
        >
          Удалить выбранные элементы
        </Button>
      )}

      <Button
        href="https://google.com"
        target="_blank"
        variant="contained"
        sx={{
          marginRight: '20px',
          backgroundColor: grey['A100'],
          color: '#000'
        }}
        startIcon={<Icon>fingerprint</Icon>}
      >
        Перейти в Google
      </Button>
    </div>
  );
};
