import React, { Component } from 'react';
import styles from './Cart.module.css';

export class Cart extends Component {
  render() {
    return (
      <div className={`container ${styles['cart-container']}`}>
        <div>Cart</div>
      </div>
    );
  }
}

export default Cart;
