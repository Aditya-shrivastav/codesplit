import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row style={{ minHeight: '70vh' }} className='align-items-center my-3'>
          <Col xs={12} md={6} lg={5}>
            <h1 className='homeScreen-title'>CodeSplit!</h1>
            <h1 className='homeScreen-title'>Collaborate in Real Time</h1>
            <Row className='mt-5 btn-row'>
              <Button
                className='btn homeScreen-btn my-1 mx-1'
                type='button'
                variant='primary'
              >
                Create
              </Button>
              <Button
                type='button'
                className='btn homeScreen-btn my-1 mx-1'
                variant='dark'
              >
                Join
              </Button>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <Image src='/images/mac.png' fluid />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
