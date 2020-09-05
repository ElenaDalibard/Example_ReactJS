import React, { Component } from "react"

export class AddText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: [],
            inputValue : ""
        }
    }

    submitLine = (e) => {
        let td={...this.state.newTodo}
        td['text'] = e.target.value
        td['fait'] = false
        
        this.setState({
            newTodo: td,
            inputValue:e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.newTodo)
        this.state.inputValue=""
    }
    
    render() {
        return (
            <form className="container" onSubmit={this.submitForm}>
                <div className="row m-1 justify-content-between">
                    <input type="text" onChange={this.submitLine} name="todoLine" className="col-9 form-control form" placeholder="à faire" value={this.state.inputValue} />
                    <button type="submit" className="col-2 btn btn-light form-control creer">Creer</button>
                </div>
            </form>
        )
    }
}