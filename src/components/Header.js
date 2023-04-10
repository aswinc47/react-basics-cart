import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="primary" className='py-4' variant="dark">
    <Container>
      <Navbar.Brand href="/" className='px-5'>
        <h4 className='text-secondary'>CART DEMO</h4>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header