import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { createUserApi } from '../../../services/API.service'
import { toast } from 'react-toastify';

const CreateUser = (props) => {
  const { show, handleShow, getListUser } = props
  const handleClose = () => {
    handleShow(false)
    setEmail("")
    setName("")
    setPassword("")
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleCreateUser = async () => {
    if (!email) {
        toast.error('email invalid')
        return;
    }
    let data = {email, password, name}
    try {
        const res = await createUserApi(data)
        if (res.success) {
            toast.success(res.message)
            handleClose()
            await getListUser()
        }
    } catch (e) {
        toast.error(e.message)
    }
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label className="form-label">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="huunv"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleCreateUser} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUser;
