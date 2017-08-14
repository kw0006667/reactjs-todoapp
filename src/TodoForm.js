import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoForm extends Component {
  constructor(){
    super();
    this.state = {
      item: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({ item: '' });
    ReactDOM.findDOMNode(this.refs.item).focus();
    return;
  }

  onChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-10">
            <input type='text' className="todoField form-control" ref='item' onChange={this.onChange.bind(this)} value={this.state.item} />
            <input type='submit' className="btn btn-default" style={{ "float": "left", "marginLeft": "5px" }} value='Add' />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;