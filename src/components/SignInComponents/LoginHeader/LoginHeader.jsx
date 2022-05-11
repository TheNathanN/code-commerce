import React, { Component } from 'react';
import styles from './LoginHeader.module.css';

import SelectBtn from '../../UI/SelectBtn';

export class LoginHeader extends Component {
  render() {
    const { toggleState, createAccount } = this.props;

    return (
      <div className={`${styles['header-container']}`}>
        <div>
          <SelectBtn
            toggleState={toggleState}
            createAccount={createAccount}
            buttonType='signIn'
            label='SIGN IN'
            toggle='createAccount'
          />
        </div>

        <SelectBtn
          toggleState={toggleState}
          createAccount={createAccount}
          buttonType='create'
          label='CREATE ACCOUNT'
          toggle='createAccount'
        />
      </div>
    );
  }
}

export default LoginHeader;
