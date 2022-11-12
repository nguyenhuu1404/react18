import React from 'react'
import './User.scss'

class ListUserInfo extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {showListUser: true}
    }

    handleShowListUsers = () => {
        this.setState(state => ({
            showListUser: !state.showListUser
        }))
    }

    render() {
        const { listUsers, deleteUser } = this.props
        const { showListUser } = this.state

        return (
            <>
                <div onClick={this.handleShowListUsers}>{showListUser ? "Hidden list users" : "Show list users"}</div>
                {(showListUser &&
                    <div className='list-user'>
                        {listUsers.map(user => {
                            return (
                                <div key={user.id} className={user.age > 30 ? 'cl-red' : 'cl-blue'}>
                                    <div>name: {user.name}</div>
                                    <div>age: {user.age}</div>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                )}
            </>
        )
    }
}

export default ListUserInfo
