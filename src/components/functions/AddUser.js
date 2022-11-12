import React, { useState } from "react"

const AddUser = (props) => {
    const [id, setId] = useState(1)
    const [name, setName] = useState('Huunv')
    const [age, setAge] = useState(33)

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleAge = (event) => {
        setAge(event.target.value)
    }

    const createUser = (event) => {
        event.preventDefault()
        props.createUser({
            id: Math.floor(Math.random() * 1000) + 1,
            name: name,
            age: age
        })
    }

    return (
        <div>
            <h1>Hello word</h1>
            <div>I'm {name}. I'm {age} year old.</div>
            <hr/>
            <form onSubmit={createUser}>
                <label>Name: </label>
                <input onChange={handleName} value={name} type="text"/>
                <label>Age: </label>
                <input onChange={event => handleAge(event)} value={age} type="text"/>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default AddUser
