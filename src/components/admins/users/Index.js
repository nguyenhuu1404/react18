import { useState } from "react"
import CreateUser from "./CreateUser"

const Index = (props) => {
    const [show, setShowCreateUser] = useState(false)
    const handleShow = () => setShowCreateUser(true)

    return (
        <div>
            <h2>user component</h2>
            <div>
                <button variant="primary" onClick={handleShow}>
                    Create user
                </button>
                <CreateUser show={show} handleShow={setShowCreateUser} />
            </div>
        </div>
    )
}

export default Index
