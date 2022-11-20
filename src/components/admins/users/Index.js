import { useEffect, useState } from "react"
import CreateUser from "./CreateUser"
import ListUser from "./ListUser"
import { getListUserApi } from "../../../services/API.service"
import { toast } from 'react-toastify';

const Index = (props) => {
    const [show, setShowCreateUser] = useState(false)
    const handleShow = () => setShowCreateUser(true)
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        getListUser()
    }, [])

    const getListUser = async () => {
        try {
            const res = await getListUserApi()
            setListUsers(res.data)
        } catch (e) {
            toast.error(e.message)
        }
    }

    return (
        <div>
            <h2>Manager User</h2>
            <div>
                <button className="btn btn-primary" variant="primary" onClick={handleShow}>
                    Create user
                </button>
                <CreateUser show={show} getListUser={getListUser} handleShow={setShowCreateUser} />
            </div>
            <div className="manager-user">
                <ListUser listUsers={listUsers}></ListUser>
            </div>
        </div>
    )
}

export default Index
