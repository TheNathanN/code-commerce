import React, { Component } from 'react';
import styles from './Cart.module.css';

export class Cart extends Component {
  render() {
    return (
      <div className={`container ${styles['cart-container']}`}>
        <table className={`${styles['cart-table']}`}>
          <thead className={`${styles['cart-header']}`}>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL PRICE</th>
          </thead>

          <tbody>Cart Body</tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
