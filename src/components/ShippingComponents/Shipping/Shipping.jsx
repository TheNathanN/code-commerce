import React, { Component } from 'react';
import styles from './Shipping.module.css';

export class Shipping extends Component {
  render() {
    return (
      <div className={`${styles['shipping-container']}`}>
        <div>Shipping</div>
      </div>
    );
  }
}

export default Shipping;
