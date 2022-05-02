/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      // eslint-disable-next-line react/prop-types
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write todo');
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChangeHandler}
          name="title"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}
