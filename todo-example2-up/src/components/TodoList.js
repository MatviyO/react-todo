import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">todo list</h3>
               <TodoItem />
                <button type="submit" className="btn btn-danger btn-block text-capitalize mt-5">Clear list</button>
           </ul>
        );
    }
}

export default TodoList;
