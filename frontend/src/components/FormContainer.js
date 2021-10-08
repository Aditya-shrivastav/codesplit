import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <div className="auth-screen">
      <Container>
        <Row className="auth-row">
          <Col xs={12} md={7} xl={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FormContainer
