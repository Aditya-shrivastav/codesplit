import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <FormContainer>
      <Card className='my-3 p-2'>
        <Card.Body>
          <Card.Title className='text-center mt-4 mb-3' as='h2'>
            Sign In
          </Card.Title>
          <Form onSubmit={submitHandler}>
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
              Sign In
            </Button>
          </Form>
          <Row className='py-3'>
            <Col className='text-center'>
              New Customer? <Link to='/register'>Register</Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </FormContainer>
  )
}

export default LoginScreen
