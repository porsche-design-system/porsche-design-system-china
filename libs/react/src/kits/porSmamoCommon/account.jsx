import React, {Component} from 'react';
import PropTypes from 'prop-types';

import $images from '@pui/icons';
import {logout} from '@pui/helper';

export default class Account extends Component {

  static propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    roleName: PropTypes.string
  };

  render() {
    const {firstName, lastName, roleName} = this.props;
    return (
      <div className="account-info">
        <$images.SvgIconContact className="message-icon" />
        <span className="name-text">
          {roleName}
        </span>
        <span className="name-text">
          {lastName} {firstName}
        </span>
        <span className="role-text">
          <button
            className="logout-link"
            onClick={logout}
          >
            注销
          </button>
        </span>
      </div>
    );
  }
}
