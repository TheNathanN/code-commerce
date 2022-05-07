import React, { Component } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import Promo from '../Promo/Promo';
import Total from '../Total/Total';
import styles from './Summary.module.css';

export class Summary extends Component {
  render() {
    const {
      itemsInCart,
      view,
      discount,
      shipping,
      verifyDiscount,
      changeView,
    } = this.props;

    return (
      <div className={`${styles['summary-container']}`}>
        <p className={`${styles['summary-header']}`}>Summary</p>

        {view === 'cart' && <Promo verifyDiscount={verifyDiscount} />}

        {view !== 'cart' && (
          <CartSummary view={view} itemsInCart={itemsInCart} />
        )}

        <Total
          itemsInCart={itemsInCart}
          discount={discount}
          shipping={shipping}
        />

        <button
          className={`${styles['summary-btn']}`}
          onClick={() => changeView('next', view)}
        >
          {view === 'cart' ? 'Shipping' : 'Checkout'}
        </button>
      </div>
    );
  }
}

export default Summary;
