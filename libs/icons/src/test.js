import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Icons from './svg'

class IconList extends Component {
  render() {
    return (
      <div>
        <Icons></Icons>
      </div>
    )
  }
}

ReactDOM.render(<IconList />, document.getElementById('pui-icons'))
