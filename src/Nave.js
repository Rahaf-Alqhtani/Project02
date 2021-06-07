import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './Nav.css'

export default class Nave extends Component {
    render() {
        return (
            <div>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand className="Nav">  </Navbar.Brand>
  </Navbar>
</Container>
            </div>
        )
    }
}
