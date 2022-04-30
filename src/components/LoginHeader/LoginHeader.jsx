import React, { Component } from 'react';
import styles from './LoginHeader.module.css';

import SelectBtn from '../UI/SelectBtn';

export class LoginHeader extends Component {
  render() {
    const { toggleState, createAccount } = this.props;

    return (
      <div className={`container ${styles['header-container']}`}>
        <div>
          <SelectBtn
            toggleState={toggleState}
            createAccount={createAccount}
            buttonType={'signIn'}
          />
        </div>

        <SelectBtn
          toggleState={toggleState}
          createAccount={createAccount}
          buttonType={'create'}
        />
      </div>
    );
  }
}

export default LoginHeader;
