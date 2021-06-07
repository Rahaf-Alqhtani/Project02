import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'

export default class AppCard extends Component {
    constructor(props) {
                super(props);
                this.state = {
                  info: null
                }
              }
              componentDidMount() {
                this.callApi()
              }
              callApi() {
              axios({
                method: "get",
                url: "https://api.artic.edu/api/v1/artworks?page=2&limit=100"
              }).then((response) => {
                this.setState({ info: response.data.data })
                console.log("res", response.data.data[0].artist_title);
              }).catch((e) => {
                console.log("error", e);
              })
            }
    render() {
        return (
            <div>
   <Card border="dark" style={{ width: '30rem' }}>
    <Card.Header>              </Card.Header>
    <Card.Body>
      <Card.Title>The Artest Name: </Card.Title>
      <Card.Text>
  
        {this.state.info?<h1>   {this.state.info[0].artist_title}
        </h1>:null}
      </Card.Text>
    </Card.Body>
  </Card>
            </div>
        )
    }
}
