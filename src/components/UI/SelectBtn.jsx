import React, { Component } from 'react';
import styles from './SelectBtn.module.css';

export class SelectBtn extends Component {
  render() {
    const {
      createAccount,
      toggleState,
      buttonType,
      label,
      toggle,
      shippingMode,
      toggleShippingMode,
    } = this.props;

    return (
      <div
        className={`${styles['select-container']}`}
        onClick={() =>
          shippingMode ? toggleShippingMode(shippingMode) : toggleState(toggle)
        }
      >
        <div
          type='button'
          className={
            (createAccount && buttonType === 'create') ||
            (!createAccount && buttonType === 'signIn') ||
            toggle === shippingMode
              ? `${styles['select-btn']} ${styles['selected']}`
              : `${styles['select-btn']}`
          }
        ></div>
        <p className={shippingMode ? styles['select-label'] : ''}>{label}</p>
      </div>
    );
  }
}

export default SelectBtn;
