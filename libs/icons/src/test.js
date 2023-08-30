import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Icons from './index'

class IconList extends Component {
  render() {
    console.log(Icons, 'Icons')
    const { dispatch } = this.props
    console.log(dispatch)
    return <div>{/* TODO：list the icons */}</div>
  }
}

ReactDOM.render(<IconList />, document.getElementById('pui-icons'))
