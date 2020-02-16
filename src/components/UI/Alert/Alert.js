import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Alert.scss'

class Alert extends Component {
  state= {
    msg:"",
    style:""
  }

  componentDidMount() {
    PubSub.subscribe("alerta", (topico, data) => {
      this.setState(data)
    })
  }

  render() {
    return (
    <p className={`alert ${this.state.style}`}>{this.state.msg}</p>
    )
  }
}

export default Alert
