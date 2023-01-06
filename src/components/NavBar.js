import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

function NavBar({ filterBySearch }) {

     const [searchValue, setSearchValue] = useState('')
     const onSearch = () => {
          //we can apply e.prevendefault in here instead using it in the form.
          //forms should always have e.prevent default to avoid uploading the browser when submitting or searching
          filterBySearch(searchValue)
          setSearchValue('') //after the search, the search box will clear the text

     }
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
                    onChange= {(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    />
                    <Button onClick={() => onSearch()} className='btn-search'>Search</Button>
               </Form>
               </Navbar.Collapse>
          </Container>
     </Navbar>
    </Row>
  )
}

export default NavBar