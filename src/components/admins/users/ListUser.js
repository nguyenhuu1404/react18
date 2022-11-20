import { deleteUserApi } from '../../../services/API.service'
import { toast } from 'react-toastify';

const ListUser = (props) => {
    const {listUsers, clickShowUpdateUser, clickShowUserInfo, getListUser} = props

    const handleDeleteUser = async (userId) => {
        if (!window.confirm("Delete the item?")) {
            return;
        }
        try {
            const res = await deleteUserApi(userId)
            if (res.success) {
                await getListUser()
                toast.success(res.message)
            }
        } catch (e) {
            toast.error(e.message)
        }
      }

    return (
        <>
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listUsers && listUsers.length > 0 &&
                    listUsers.map((user, key) => {
                        return (
                            <tr key={`list-user-${key}`}>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => clickShowUserInfo(user)} className="btn btn-sm btn-info">View</button>
                                    <button onClick={() => clickShowUpdateUser(user)} className="btn ms-2 me-2 btn-sm btn-warning">Edit</button>
                                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                {
                    listUsers && listUsers.length === 0 &&
                    (
                        <td colSpan={'4'}>No data</td>
                    )
                }
            </tbody>
            </table>
        </>
    )
}

export default ListUser
