import React, { Component } from 'react'

class UserInput extends Component {
  render() {
    return (
      <input placeholder={this.props.placeholder} onChange={this.props.handleInput} name={this.props.name} type={this.props.type} minLength={this.props.minLength}/>
    )
  }
}

export default UserInput
