import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Porsche UI : others </h2>
      </div>
    )
  }
}
ReactDOM.render(<Welcome />, document.getElementById('box'))
