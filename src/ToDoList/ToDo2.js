import React, { Component } from "react"

export class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editTodo: "",
            oldTodo: "",
            todoFait: false,
            btnText: "Pas fait",
            btnType: "btn btn-danger",
            textColor: "text-danger",
            editForm: false,
            editBtnText: "Modifier"
        }
    }

    setStyle = () => {
        if (!this.state.editForm) {
            this.props.setDone(this.props.todo.text)
            if (!this.props.todo.fait) {
                this.setState({
                    btnText: "Fait",
                    todoFait: true,
                    btnType: "btn btn-success",
                    textColor: "text-success"
                })
            }
            else {
                this.setState({
                    btnText: "Pas fait",
                    todoFait: false,
                    btnType: "btn btn-danger",
                    textColor: "text-danger"
                })
            }
        }
    }

    editLine = () => {
        if (!this.state.editForm) {
            this.setState({
                editForm: true,
                editBtnText: "Valider"
            })
        }
        else {
            this.props.editTodo(this.state.editTodo, this.props.todo.text)
            this.setState({
                editForm: false,
                editTodo: "",
                editBtnText: "Modifier"
            })
        }
    }

    render() {
        let ligne = []
        if (this.state.editForm) {
            ligne.push(<input type="text" onChange={(e) => {
                this.setState({
                    editTodo: e.target.value,
                })
            }} className="col-9" defaultValue={this.props.todo.text} />)
        }
        else {
            ligne.push(<div className="col-9" className={this.state.textColor}>{this.props.todo.text}</div>)
        }
        return (
            <article className="container">
                <div className="row m-1 justify-content-between">
                    <div className="col-7">
                        <div onClick={this.setStyle} className="row todoline justify-content-between">
                            {ligne}
                            <button className="col-2" className={this.state.btnType}>{this.state.btnText}</button>
                        </div>
                    </div>
                    <button onClick={this.editLine} className="col-2 btn btn-primary edit">{this.state.editBtnText}</button>
                    <button onClick={() => { this.props.delete(this.props.text) }} className="col-2 btn btn-primary delete">Supprimer</button>
                </div>
            </article>
        )
    }
}