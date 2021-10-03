import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = () => {}

  return (
    <>
      <FormContainer>
        <Card className='my-3 p-2'>
          <Card.Body>
            <Card.Title className='text-center mt-4 mb-3' as='h2'>
              Register
            </Card.Title>
            <Form onSubmit={submitHandler}>
              <Form.Group className='my-2' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='my-2' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='my-2' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter your Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button className='btn my-3' type='submit' variant='primary'>
                Register
              </Button>
            </Form>
            <Row className='py-3'>
              <Col className='text-center'>
                Already a user? <Link to='/login'>Login</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </FormContainer>
    </>
  )
}

export default RegisterScreen
