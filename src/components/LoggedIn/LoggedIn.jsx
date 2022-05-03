import React, { Component } from 'react';
import styles from './LoggedIn.module.css';

import Cart from '../CartComponents/Cart/Cart';

export class LoggedIn extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={`${styles['cart-container']}`}>
        <Cart />
      </div>
    );
  }
}

export default LoggedIn;
