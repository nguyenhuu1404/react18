import { useEffect, useState } from "react"
import CreateUser from "./CreateUser"
import ListUser from "./ListUser"
import { getListUserApi, getPaginationUserApi } from "../../../services/API.service"
import { toast } from 'react-toastify';
import EditUser from "./EditUser";
import UserInfo from "./UserInfo";
import UserPagination from "./UserPagination";
import { useDispatch } from "react-redux"
import { listUserPaginate } from "../../../redux/actions/UsersAction"
import { useNavigate } from "react-router-dom"

const Index = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShowCreateUser] = useState(false)
    const handleShow = () => setShowCreateUser(true)
    const [showUpdateUser, setShowUpdateUser] = useState(false)
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [listUsers, setListUsers] = useState([])
    const [dataUpdate, setDataUpdate] = useState({})
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getListUserPagination()
    }, [])

    const getListUser = async () => {
        try {
            const res = await getListUserApi()
            setListUsers(res.data)
        } catch (e) {
            toast.error(e.message)
        }
    }

    const getListUserPagination = async () => {
        try {
            const res = await getPaginationUserApi(currentPage)
            //setListUsers(res.data)
            //setPageCount(res.pagination.total_page)
            dispatch(listUserPaginate(res.data, res.pagination))
        } catch (e) {
            if (e.data.code === 401) {
                navigate("/admin/login");
            }
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
                <CreateUser show={show} getListUser={getListUserPagination} handleShow={setShowCreateUser} />
                <EditUser setDataUpdate={setDataUpdate} dataUpdate={dataUpdate} getListUser={getListUser} show={showUpdateUser} handleShow={setShowUpdateUser}/>
                <UserInfo dataUpdate={dataUpdate} show={showUserInfo} handleShow={setShowUserInfo} />
            </div>
            <div className="manager-user">
                <UserPagination
                    listUsers={listUsers}
                    clickShowUpdateUser={clickShowUpdateUser}
                    clickShowUserInfo={clickShowUserInfo}
                    getListUser={getListUserPagination}
                    pageCount={pageCount}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Index
