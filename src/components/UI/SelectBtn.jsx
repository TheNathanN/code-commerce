import React, { Component } from 'react';
import styles from './SelectBtn.module.css';

export class SelectBtn extends Component {
  render() {
    const { createAccount, toggleState, buttonType } = this.props;

    return (
      <div
        className={`${styles['select-container']}`}
        onClick={() => toggleState('createAccount')}
      >
        <div
          type='button'
          className={
            (createAccount && buttonType === 'create') ||
            (!createAccount && buttonType === 'signIn')
              ? `${styles['select-btn']} ${styles['selected']}`
              : `${styles['select-btn']}`
          }
        ></div>
        <p>{buttonType === 'create' ? 'CREATE ACCOUNT' : 'SIGN IN'}</p>
      </div>
    );
  }
}

export default SelectBtn;
