import React, { Component } from 'react'
import Nave from './Nave'
import AppCard from './AppCard'
import Footer from './Footer'
export default class App extends Component {
  render() {
    return (
      <center className="App">
        <Nave/>
        <AppCard/>
        {/* <Footer/> */}
        <Nave/>
  
      </center>
    )
  }
}
