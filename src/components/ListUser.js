import React from 'react'
import AddUser from './AddUser'
import ListUserInfo from './functions/ListUserInfo'

class ListUser extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            listUsers: [
                {
                    id: 1,
                    name: 'huunv',
                    age: 33
                }
            ]
        }
    }

    createUser = (user) => {
        this.setState(state => ({
            listUsers: [user, ...state.listUsers]
        }))
    }

    deleteUser = (userId) => {
        let listUserOld = this.state.listUsers
        let listUserNew = listUserOld.filter((user) => user.id !== userId)
        this.setState({
            listUsers: listUserNew
        })
    }

    render() {
        return (
            <>
                <AddUser
                    createUser={this.createUser}
                />
                <hr />
                <ListUserInfo
                    listUsers={this.state.listUsers}
                    deleteUser={this.deleteUser}
                />
            </>
        )
    }
}

export default ListUser
