import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand'>CodeSplit</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <LinkContainer className='mx-2' to='/about'>
                <Nav.Link className='nav-link'>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer className='mx-2' to='/contact'>
                <Nav.Link className='nav-link'>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer className='mx-2' to='/login'>
                <Nav.Link className='nav-link'>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
