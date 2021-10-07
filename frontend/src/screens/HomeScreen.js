import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Modal,
} from 'react-bootstrap'
import { languages } from '../data/languages'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeScreen = () => {
  const [modalShow, setModalShow] = useState(false)
  const [type, setType] = useState('create')

  const handleCreate = () => {
    setType('create')
    setModalShow(true)
  }

  const handleJoin = () => {
    setType('join')
    setModalShow(true)
  }

  return (
    <div className="home-screen">
      <Header />
      <Container>
        <Row className="p-3 home-row">
          <Col xs={12} md={6} className="px-lg-5 px-3 my-auto">
            <h1 className="homeScreen-title">CodeSplit!</h1>
            <h1 className="homeScreen-title">Collaborate in Real Time</h1>
            <Row className="mt-5 btn-row">
              <Button
                className="btn homeScreen-btn my-1 mx-1"
                type="button"
                variant="primary"
                onClick={handleCreate}
              >
                Create
              </Button>
              <Button
                type="button"
                className="btn homeScreen-btn my-1 mx-1"
                variant="dark"
                onClick={handleJoin}
              >
                Join
              </Button>
            </Row>
          </Col>
          <Col xs={12} md={6} className="px-lg-5">
            <Image src="/images/mac.png" fluid />
          </Col>
        </Row>

        {type === 'create' ? (
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="md"
            centered
          >
            <Modal.Body>
              <h2 className="text-center p-3">Choose A Language</h2>
              <Form.Control as="select" className="my-3">
                {languages.slice(0, 3).map((x) => (
                  <option className="lang-options" key={x} val={x}>
                    {x}
                  </option>
                ))}
              </Form.Control>
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" onClick={handleCreate}>
                Create
              </Button>
              <Button variant="secondary" onClick={() => setModalShow(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="md"
            centered
          >
            <Modal.Body>
              <h2 className="text-center p-3">Enter Room Id</h2>
              <Form.Control
                type="text"
                placeholder="Enter Room Id"
                className="my-3"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" onClick={handleJoin}>
                Join
              </Button>
              <Button variant="secondary" onClick={() => setModalShow(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
      <Footer />
    </div>
  )
}

export default HomeScreen
