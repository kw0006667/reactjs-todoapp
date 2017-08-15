import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove(e) {
    this.props.onDelete(e);
  }

  render() {
    var createItem = function (itemText, i) {
      return (
        <TodoListItem key={i} value={i} onRemove={this.remove}>{itemText}</TodoListItem>
      );
    };

    // Here is the filter function
    var allitems = this.props.items;

    var status = this.props.filter[0].Status;
    switch (status) {
      case 'false':
        allitems = allitems.filter(t => !t.isDone);
        break;
      case 'true':
        allitems = allitems.filter(t => t.isDone);
        break;
      default:
        break;
    };

    // Here is the search function
    var queryText = this.props.filter[0].keyword;

    if (queryText) {
      var queryResult = [];
      allitems.forEach(function(item) {
        if (item.item.toLowerCase().indexOf(queryText)!== -1) {
          queryResult.push(item);
        }
      });
      
      return <ul>{queryResult.map(createItem, this)}</ul>;
    }

    return <ul>{this.props.items.map(createItem, this)}</ul>
  }
}

export default TodoList;