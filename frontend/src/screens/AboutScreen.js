import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'

const AboutScreen = () => {
  const bg = '/images/aboutbg.png'

  return (
    <>
      <Row
        className='align-items-center m-auto'
        style={{
          minHeight: '35vh',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
        }}
      >
        <h1
          className='text-center'
          style={{ fontSize: '3rem', fontWeight: '800', color: 'white' }}
        >
          About Us
        </h1>
      </Row>
      <Container className='my-4'>
        <h1 className='text-center'>Development Team</h1>
        <Row className='justify-content-center space my-3'>
          <Card className='mx-3 my-2 py-2 card' style={{ width: '18rem' }}>
            <Card.Img
              className='mx-auto my-2'
              variant='top'
              src='/images/harry.jpg'
              style={{ borderRadius: '50%', width: '12rem' }}
            />
            <Card.Body className='text-center'>
              <Card.Title>Hari om Ojha</Card.Title>
              <Card.Text>Co-Founder, Developer</Card.Text>
            </Card.Body>
          </Card>
          <Card className='mx-3 my-2 py-2 card' style={{ width: '18rem' }}>
            <Card.Img
              className='mx-auto my-2'
              variant='top'
              src='/images/adi.jpg'
              style={{ borderRadius: '50%', width: '12rem' }}
            />
            <Card.Body className='text-center'>
              <Card.Title>Aditya Shrivastav</Card.Title>
              <Card.Text>Co-Founder, Developer</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default AboutScreen
