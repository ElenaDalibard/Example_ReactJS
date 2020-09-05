import React, { Component } from "react"
import { AddText } from "./AddText"
import { ToDo } from "./ToDo"

export class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textTodo: [],
            total: 0
        }
    }

    addTodo = (newTodo) => {
        let tmpTodo = [...this.state.textTodo, newTodo]
        this.setState({
            textTodo: tmpTodo
        })
        this.state.total++
    }

    editTodo = (newText, oldText) => {
        let tmpTodo = []
        tmpTodo = this.state.textTodo
        for (let i in tmpTodo) {
            if (tmpTodo[i] == oldText) {
                tmpTodo[i] = newText
            }
        }
        this.setState({
            textTodo: tmpTodo
        })
    }

    delete = (line) => {
        let tmpTodo = []
        for (let todo of this.state.textTodo) {
            if (todo != line) {
                tmpTodo.push(todo)
            }
        }
        this.setState({
            textTodo: tmpTodo
        })
        this.state.total--
    }

    render() {
        return (
            <section>
                <h2>ToDo-liste</h2>
                <AddText addTodo={this.addTodo} />
                <div className="totalTasks">{this.state.total} choses à faire :</div>
                {this.state.textTodo.map((element) => {
                    return (
                        <nav>
                            <ToDo text={element} delete={this.delete} editTodo={this.editTodo}></ToDo>
                        </nav>
                    )
                })}
            </section>
        )
    }
}