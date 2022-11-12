import React, { useEffect, useState } from 'react'
import AddUser from './AddUser'
import ListUserInfo from './ListUserInfo'

const ListUser = (props) => {
    const [listUsers, setListUsers] = useState([
        {
            id: 1,
            name: 'huunv',
            age: 33
        }
    ])

    const createUser = (user) => {
        setListUsers([user, ...listUsers])
    }

    const deleteUser = (userId) => {
        let listUserOld = listUsers
        let listUserNew = listUserOld.filter((user) => user.id !== userId)
        setListUsers(listUserNew)
    }

    useEffect(() => {
        console.log(">>>>> use effect")
    }, [])

    return (
        <>
            <AddUser
                createUser={createUser}
            />
            <hr />
            <ListUserInfo
                listUsers={listUsers}
                deleteUser={deleteUser}
            />
        </>
    )
}

export default ListUser
