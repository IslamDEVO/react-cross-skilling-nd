import React, {Component} from "react";
import TodoItem from "./TodoItem";

//we will use a static todo list for now
const TodoListItems = [
    {
        id: 1,
        text: "Learn React",
        completed: false,
        type: "work",
    },
    {
        id: 2,
        text: "Learn JS",
        completed: false,
        type: "work",
    },
    {
        id: 3,
        text: "Learn Anything",
        completed: true,
        type: "work",
    }
];

class TodoList extends Component {
    render() {
      return (
        <ol className='todo-list-container'>
          {TodoListItems.map((item) => (
            <TodoItem todo={item} key={item.id} />
          ))}
        </ol>
      );
    }
  }
  
  export default TodoList;