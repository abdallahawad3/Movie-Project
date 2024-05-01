import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const NavBar = ({search}) => {
  const [text,setText] = useState("");
  return (
      <Navbar expand="lg" className="navbar py-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex search rounded-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 input"
                  aria-label="Search"
                  value={text}
                  onChange={(e)=>{
                    setText(e.target.value);
                    search(e.target.value)
                  }}
                />
                <Button onClick={()=>{search(text)}} variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default NavBar