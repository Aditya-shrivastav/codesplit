import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>CodeSplit</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <LinkContainer to='/about'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact US</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
