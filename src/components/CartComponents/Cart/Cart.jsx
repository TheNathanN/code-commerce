import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import styles from './Cart.module.css';

export class Cart extends Component {
  render() {
    return (
      <div className={`${styles['cart-container']}`}>
        <main className={`${styles['cart-table']}`}>
          <div className={`${styles['cart-header']}`}>
            <div className='cart-col-1'>PRODUCT</div>
            <div className='cart-col-2'>PRICE</div>
            <div className='cart-col-3'>QUANTITY</div>
            <div className='cart-col-4'>TOTAL PRICE</div>
          </div>

          <div className={`${styles['cart-body']}`}>
            <ProductRow
              img='https://images.unsplash.com/photo-1651489330304-6b7521930deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              productName='Winter Coat'
              gender='Women'
              color='Brown'
              size='Medium'
              price='50.00'
              quantity={2}
              totalPrice='100.00'
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Cart;
