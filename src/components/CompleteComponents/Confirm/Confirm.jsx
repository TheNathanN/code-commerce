import React, { Component } from 'react';

import styles from './Confirm.module.css';

export class Confirm extends Component {
  render() {
    return (
      <div className={`${styles['confirm-container']}`}>
        <div>Confirmation</div>
      </div>
    );
  }
}

export default Confirm;
