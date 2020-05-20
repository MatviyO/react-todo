import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from 'uuid'

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        title: '',
        editItem: false
    };
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: this.state.id,
            title: this.state.title
        }
        const updateItems = [...this.state.items, newItem]
        this.setState({
            items: updateItems,
            id: uuid(),
            editItem: false,
            title: ''
        })
    }
    claerList = () => {
        this.setState({
            items: []
        })
    }
    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id)
        this.setState({
            items: filteredItems
        })
    }
    handeEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id)
        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState({
            items: filteredItems,
            title : selectedItem.title,
            editItem: true,
            id: id

        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">todo input</h3>
                        <TodoInput title={this.state.title}
                                   handleChange={this.handleChange}
                                   handleSubmit={this.handleSubmit}
                                    editItem={this.state.editItem}/>
                        <TodoList items={this.state.items}
                                  handeEdit={this.handeEdit}
                                  claerList={this.claerList}
                                  handleDelete={this.handleDelete}
                        />
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default App;
