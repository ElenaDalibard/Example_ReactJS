import React, { Component } from "react"
import { AddText } from "./AddText2"
import { ToDo } from "./ToDo2"

export class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            total: 0
        }
    }

    addTodo = (newTodo) => {
        let tmpTodo = [...this.state.todos, newTodo]
        this.setState({
            todos: tmpTodo
        })
        this.state.total++
    }

    editTodo = (newText, oldText) => {
        let tmpTodo = []
        tmpTodo = this.state.todos
        for (let todo of tmpTodo) {
            if (todo.text == oldText) {
                todo.text = newText
            }
        }
        this.setState({
            todos: tmpTodo
        })
    }

    setDone = (text) => {
        let tmpTodo = []
        let newStatus = !this.state.todos.fait
        for (let todo of this.state.todos) {
            if (todo.text == text) {
                todo.fait = newStatus
            }
            this.setState({
                todos: tmpTodo
            })
        }
    }

    delete = (line) => {
        let tmpTodo = []
        for (let todo of this.state.todos) {
            if (todo.text != line) {
                tmpTodo.push(todo)
            }
        }
        this.setState({
            todos: tmpTodo
        })
        this.state.total--
    }

    render() {
        return (
            <section>
                <h2>ToDo-liste</h2>
                <AddText addTodo={this.addTodo} />
                <div className="totalTasks">{this.state.total} choses à faire :</div>
                {this.state.todos.map(todo => {
                    return (
                        <nav>
                            <ToDo todo={todo} setDone={this.setDone} delete={this.delete} editTodo={this.editTodo}></ToDo>
                        </nav>
                    )
                })}
            </section>
        )
    }
}