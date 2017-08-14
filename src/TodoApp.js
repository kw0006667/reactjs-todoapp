import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoBanner from './TodoBanner';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { item: 'Todo item #1', isDone: false },
        { item: 'Todo item #2', isDone: true }
      ]
    };
  }

  updateItems(newItem) {
    var item = { item: newItem, isDone: false };
    var allItems = this.state.items.concat([item]);
    this.setState({
      items: allItems
    });
  }

  delete(index) {
    var newData = this.state.items.slice(); // copy array
    newData.splice(index, 1); // remove element
    this.setState({
      items: newData
    });
  }

  render() {
    return (
      <div>
        <TodoBanner />
        <TodoForm onFormSubmit={this.updateItems} />
        <TodoList items={this.state.items} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoApp;