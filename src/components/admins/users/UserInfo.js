import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import _ from 'lodash';

const UserInfo = (props) => {
  const { show, handleShow, dataUpdate } = props
  const handleClose = () => {
    handleShow(false)
    setEmail("")
    setName("")
    setPassword("")
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
        setEmail(dataUpdate.email)
        setName(dataUpdate.name)
        setPassword(dataUpdate.password)
    }
  }, [dataUpdate])

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
          <Modal.Title>User info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        disabled
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserInfo;
