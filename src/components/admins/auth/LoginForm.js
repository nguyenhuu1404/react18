import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './Login.scss';
import React, { useState } from 'react'
import { loginApi } from "../../../services/API.service"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux"
import { doLogin } from "../../../redux/actions/AuthAction";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async (event) => {
    event.preventDefault()

    let data = {email, password}
    try {
      const res = await loginApi(data)
      if (res.status) {
        dispatch(doLogin(res.data))
        navigate("/admin/users");
        toast.success(res.message)
      }
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow login">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-grid">
                  <Button 
                    onClick={(event) => handleLogin(event)}
                    variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
}

export default LoginForm;
