/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import styles from './ToDoItem.module.css';

export default class TodoItem extends Component {
  state = {
    editing: false,
  };

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  };

  render() {
    const viewMode = {};
    const editMode = {};
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button type="submit" onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
