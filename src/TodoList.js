import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './TodoListItem';

class TodoList extends Component {
  remove(e) {
    this.props.onDelete(e);
  }

  render() {
    var createItem = function (itemText, i) {
      return (
        <TodoListItem key={i} value={i} onRemove={this.remove}>{itemText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem, this)}</ul>
  }
}

export default TodoList;