import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import { Navigation } from './components'
import { Account, PorMenu } from '.'

console.log(Account, PorMenu, 'Account')
const menuData = require('./menuData.json')

class Welcome extends Component {
  tokenCallback(currentAccount) {
    console.log('tokenCallback')
  }
  render() {
    // console.log(Account)
    return (
      <div>
        <h2>Welcome to Porsche UI kits</h2>
        {/* <Navigation
        tokenCallback={this.tokenCallback} 
        menu={menuData}
        dispatch={dispatch}
      /> */}
        {/* <Account firstName={'Rock'} lastName={'Wang'} role={'fuck'} /> */}
      </div>
    )
  }
}
// const The = connect(
//   (state) => {
//     return {
//     };
//   },
//   (dispatch) => ({
//     dispatch: dispatch
//   })
// )(Welcome);

ReactDOM.render(
  // <Provider store={accountStore}>
  <Welcome />,
  // </Provider>
  document.getElementById('box'),
)
