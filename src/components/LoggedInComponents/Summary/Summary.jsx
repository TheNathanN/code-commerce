import React, { Component } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import Promo from '../Promo/Promo';
import Total from '../Total/Total';
import styles from './Summary.module.css';

export class Summary extends Component {
  render() {
    const { currentState, verifyDiscount, changeView } = this.props;

    const {
      itemsInCart,
      view,
      discount,
      shipping,
      addressTitle,
      name,
      address,
      zipCode,
      country,
      city,
      state,
      cellPhone,
      telephone,
    } = currentState;

    const shippingEntered = () => {
      if (
        addressTitle &&
        name &&
        address &&
        zipCode &&
        country &&
        city &&
        state &&
        cellPhone &&
        telephone
      ) {
        return false;
      } else {
        return true;
      }
    };

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

        {view !== 'confirm' && (
          <button
            className={`${styles['summary-btn']}`}
            onClick={() => changeView('next', view)}
            disabled={view === 'ship' ? shippingEntered() : false}
          >
            {view === 'cart'
              ? 'Shipping'
              : view === 'ship'
              ? 'Payment'
              : 'Checkout'}
          </button>
        )}
      </div>
    );
  }
}

export default Summary;
