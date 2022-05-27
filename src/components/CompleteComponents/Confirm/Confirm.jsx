import React, { Component } from 'react';

import styles from './Confirm.module.css';

export class Confirm extends Component {
  render() {
    return (
      <div className={`${styles['confirm-container']}`}>
        <h1 className={`${styles['confirm-header']}`}>Confirmation</h1>
        <div className={`${styles['confirm-body']}`}>
          <i className='fa-regular fa-circle-check'></i>
          <p className={`${styles['confirm-main-text']}`}>
            Congratulations! <br />
            Your order is accepted.
          </p>
          <button
            onClick={() => window.location.reload()}
            className={`${styles['back-btn']}`}
          >
            Back To Homepage
          </button>
        </div>
      </div>
    );
  }
}

export default Confirm;
