import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

function NavBar() {
  return (
    <Row>
     <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
               <Navbar.Brand href="#">
                    <div className='brand-color'>New Restaurant</div>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
               <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
               >
               </Nav>
               <Form className="d-flex">
                    <Form.Control
                    type="text"
                    placeholder="Find a Dish..."
                    className="mx-2"
                    />
                    <Button className='btn-search'>Search</Button>
               </Form>
               </Navbar.Collapse>
          </Container>
     </Navbar>
    </Row>
  )
}

export default NavBar