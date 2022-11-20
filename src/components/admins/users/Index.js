import { useEffect, useState } from "react"
import CreateUser from "./CreateUser"
import ListUser from "./ListUser"
import { getListUserApi } from "../../../services/API.service"
import { toast } from 'react-toastify';
import EditUser from "./EditUser";
import UserInfo from "./UserInfo";

const Index = (props) => {
    const [show, setShowCreateUser] = useState(false)
    const handleShow = () => setShowCreateUser(true)
    const [showUpdateUser, setShowUpdateUser] = useState(false)
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [listUsers, setListUsers] = useState([])
    const [dataUpdate, setDataUpdate] = useState({})

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

    const clickShowUpdateUser = (user) => {
        setShowUpdateUser(true);
        setDataUpdate(user)
    }

    const clickShowUserInfo = (user) => {
        setShowUserInfo(true);
        setDataUpdate(user)
    }

    return (
        <div>
            <h2>Manager User</h2>
            <div>
                <button className="btn btn-primary" variant="primary" onClick={handleShow}>
                    Create user
                </button>
                <CreateUser show={show} getListUser={getListUser} handleShow={setShowCreateUser} />
                <EditUser dataUpdate={dataUpdate} getListUser={getListUser} show={showUpdateUser} handleShow={setShowUpdateUser}/>
                <UserInfo dataUpdate={dataUpdate} show={showUserInfo} handleShow={setShowUserInfo} />
            </div>
            <div className="manager-user">
                <ListUser
                    listUsers={listUsers}
                    clickShowUpdateUser={clickShowUpdateUser}
                    clickShowUserInfo={clickShowUserInfo}
                    getListUser={getListUser}
                />
            </div>
        </div>
    )
}

export default Index
