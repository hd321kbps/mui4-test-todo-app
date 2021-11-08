import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export class AppForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: '',
        description: ''
      },
      error: false
    };
  }
  onAdd = (e) => {
    e.preventDefault();
    const nameVal = e.target[0].value;
    const descriptionVal = e.target[2].value;

    const errors = [];
    if (nameVal === '') errors.name = 'Имя не может быть пустым';
    if (descriptionVal === '')
      errors.description = 'Описание не может быть пустым';

    if (errors.name || errors.description) {
      this.setState({ errors, error: true });
      return;
    }

    this.props.onAdd({
      name: nameVal,
      description: descriptionVal,
      checked: false
    });

    this.setState({
      errors: {
        name: '',
        description: ''
      },
      error: false
    });
  };
  render() {
    return (
      <div style={{ padding: '10px', width: '300px' }}>
        <form action="" onSubmit={this.onAdd}>
          <TextField
            error={this.state.error}
            label={
              this.state.errors ? this.state.errors.name : 'Введите название'
            }
            placeholder="Название"
            fullWidth
            margin="dense"
          />
          <TextField
            error={this.state.error}
            label={
              this.state.errors
                ? this.state.errors.description
                : 'Введите Описание'
            }
            placeholder="Описание"
            fullWidth
            margin="dense"
          />
          <Button variant="text" color="secondary" type="submit">
            Добавить
          </Button>
        </form>
      </div>
    );
  }
}
