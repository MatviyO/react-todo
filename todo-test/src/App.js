import React, {useState, useEffect} from 'react';
import TodoList from "./components/todo/todoList";
import Context from "./hoc/context";
import Loader from './components/loader/loader'
import Modal from "./components/Modal/Modal";

const AddTodo = React.lazy(() => import('./components/addTodo/addTodo'))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id
        ))
    }
    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false

        }]))
    }

    return (
        <Context.Provider value={{
            removeTodo
        }}>
            <div className='wrapper'>
                <h1>React Todo Test</h1>
                <Modal />
                <React.Suspense fallback={<p>text</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
                { loading && <Loader />}
                { todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}/>) :( loading ? null : <p>No context</p>)}

            </div>
        </Context.Provider>

    );
}

export default App;
