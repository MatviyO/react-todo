import React from 'react';
import TodoList from "./components/todo/todoList";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Buy pechenko'},
        {id: 2, completed: false, title: 'Buy wather'},
        {id: 3, completed: false, title: 'Buy meat'}
    ])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    return (
        <div className='wrapper'>
            <h1>React Todo Test</h1>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}

export default App;
