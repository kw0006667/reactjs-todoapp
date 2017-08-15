import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }
  
  changeHandler(e) {
    this.setState({
      value: e.target.checked
    });
    this.props.children.isDone = e.target.checked;
  }

  removeHandler() {
    this.props.onRemove(this.props.value);
  }

  render() {
    var _style = "line-through";
    if (!this.props.children.isDone) {
      _style = "none";
    }
    return (
      <li data-id={this.props.value} key={this.props.value}>
        <button type="button" className="close pull-right" aria-hidden="true" onClick={this.removeHandler}>&times;</button>
        <input type="checkbox" onChange={this.changeHandler} defaultChecked={this.props.children.isDone} />
        <span style={{"textDecoration": _style}}>{this.props.children.item}</span>
      </li>
    );
  }
}

export default TodoListItem;