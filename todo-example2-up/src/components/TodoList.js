import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        const {items, claerList, handleDelete, handeEdit} = this.props
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">todo list</h3>
               {items.map(item => {
                   return(
                       <TodoItem key={item.id} title={item.title}
                                 handleDelete={() => handleDelete(item.id)}
                                 handeEdit={() => handeEdit(item.id)}
                       />
                   )
               })}

                <button onClick={claerList} type="submit"
                        className="btn btn-danger btn-block text-capitalize mt-5">Clear list</button>
           </ul>
        );
    }
}

export default TodoList;
