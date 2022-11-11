import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { id, text, completed } = this.props.todo;
    return (
        // Homework:
        // 1. Add a checkbox to the todo item
        // 2. The checkbox should be checked if the todo is completed (completed === true)
        
        <li className='todo-item todo-item-container'>
            <input type='checkbox' id={id} checked={completed} />
            <label htmlFor={id}>{text}</label>
        </li>
    );
  }
}
export default TodoItem;
