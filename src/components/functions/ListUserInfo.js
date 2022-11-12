import React from 'react'
import '../User.scss'

// function component su dung khi component khong su dung state

const ListUserInfo = (props) => {
    const { listUsers, deleteUser } = props

    return (
        <>
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
        </>
    )
}

export default ListUserInfo
