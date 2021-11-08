import React from 'react';
import ReactDOM from 'react-dom';

import { AppHeader } from './components/Header';
import { AppButtons } from './components/Buttons';
import { AppList } from './components/List';
import { AppPopover } from './components/Popover';
import { AppModal } from './components/Modal';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [
        {
          name: 'Элемент 1',
          description: 'Сложное описание 1',
          checked: false
        },
        {
          name: 'Элемент 2',
          description: 'Сложное описание 2',
          checked: false
        },
        {
          name: 'Элемент 3',
          description: 'Сложное описание 3',
          checked: false
        },
        {
          name: 'Элемент 4',
          description: 'Сложное описание 4',
          checked: true
        }
      ]
    };
  }

  onAdd = (item) => {
    this.setState({ itemsList: item });
  };
  handleCheck = (e, idx) => {
    const { itemsList } = this.state;
    itemsList[idx].checked = e.target.checked;
    this.setState({ itemsList });
  };
  render() {
    return (
      <div>
        <AppHeader />
        <div className="container">
          <AppButtons
            itemsChecked={this.state.itemsList
              .map((i) => i.checked)
              .filter((i) => i)}
            onDelete={() => {
              const itemsList = this.state.itemsList.filter((i) => !i.checked);

              this.setState({ itemsList });
            }}
          />
          <AppPopover items={this.state.itemsList} onAdd={this.onAdd} />
          <AppList items={this.state.itemsList} onCheck={this.handleCheck} />
          <AppModal />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount-point'));
