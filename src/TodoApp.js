import React, { Component } from 'react';

import TodoBanner from './TodoBanner';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { item: 'Todo item #1', isDone: false },
        { item: 'Todo item #2', isDone: true }
      ],
      filter:[
        {keyword: '', Status: "SHOW_ALL"}
      ]
    };

    this.updateItems = this.updateItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.filterItem = this.filterItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  updateItems(newItem) {
    var item = { item: newItem, isDone: false };
    var allItems = this.state.items.concat([item]);
    this.setState({
      items: allItems
    });
  }

  deleteItem(index) {
    var newData = this.state.items.slice(); // copy array
    newData.splice(index, 1); // remove element
    this.setState({
      items: newData
    });
  }

  filterItem(e) {
    this.state.filter[0].Status = e.target.attributes[1].value;   // It is a workaround caused undefined value by e.target.value
    this.setState({
      filter: this.state.filter
    });
  }

  searchItem(e) {
    this.state.filter[0].keyword = e.target.value;
    this.setState({
      filter: this.state.filter
    });
  }

  render() {
    return (
      <div>
        <TodoBanner />
        <TodoFilter onFilter={this.filterItem} onSearch={this.searchItem} filter={this.state.filter} />
        <TodoForm onFormSubmit={this.updateItems} />
        <TodoList items={this.state.items} filter={this.state.filter} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoApp;