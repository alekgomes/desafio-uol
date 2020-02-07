import React, { Component } from 'react'

class UserInput extends Component {
  render() {
    return (
      <input placeholder={this.props.placeholder} onChange={this.props.handleInput} name={this.props.name}/>
    )
  }
}

export default UserInput
