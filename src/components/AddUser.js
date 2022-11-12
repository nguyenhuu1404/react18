import React from "react"

class AddUser extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {name: 'Huunv', age: '33'};
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAge (event) {
        this.setState({
            age: event.target.value
        })
    }

    createUser = (event) => {
        event.preventDefault()
        this.props.createUser({
            id: Math.floor(Math.random() * 1000) + 1,
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                <h1>Hello word</h1>
                <div>I'm {this.state.name}. I'm {this.state.age} year old.</div>
                <hr/>
                <form onSubmit={this.createUser}>
                    <label>Name: </label>
                    <input onChange={this.handleName} value={this.state.name} type="text"/>
                    <label>Age: </label>
                    <input onChange={event => this.handleAge(event)} value={this.state.age} type="text"/>
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}

export default AddUser
