/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
export default class TodosList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
          // <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
