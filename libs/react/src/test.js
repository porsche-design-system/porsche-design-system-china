import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Account from './kits/porSmamoCommon/account'

class Welcome extends Component {
  render() {
		console.log('Account',  Account)
		const account = {
			firstName: 'rock',
			lastName: 'wang',
			roleName: 'roleName'
		}
    return (
      <div>
        <h2>Welcome to Porsche UI : others </h2>
				<Account firstName={account.firstName} lastName={account.lastName} roleName={account.roleName} />
      </div>
    )
  }
}
ReactDOM.render(<Welcome />, document.getElementById('box'))
