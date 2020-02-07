import React, { Component } from 'react'

class UserInput extends Component {
  render() {
    return (
      <input placeholder={this.props.placeholder}/>
    )
  }
}

export default UserInput
