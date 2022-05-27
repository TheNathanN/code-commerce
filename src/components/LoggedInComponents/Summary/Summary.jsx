import React, { Component } from 'react';
import { getTotal } from '../../../helpers/helperFunctions';
import CartSummary from '../CartSummary/CartSummary';
import Promo from '../Promo/Promo';
import ShipmentAddress from '../ShipmentAddress/ShipmentAddress';
import Total from '../Total/Total';
import styles from './Summary.module.css';

export class Summary extends Component {
  render() {
    const { currentState, verifyDiscount, changeView, email } = this.props;

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
      cardholderName,
      cardNumber,
      expMonth,
      expYear,
      cvv,
      cardType,
    } = currentState;

    const checkInputs = view => {
      if (view === 'ship') {
      }
      if (
        (view === 'ship' &&
          addressTitle &&
          name &&
          address &&
          zipCode &&
          country &&
          city &&
          state &&
          cellPhone &&
          telephone) ||
        (view === 'pay' &&
          cardholderName &&
          cardNumber &&
          expMonth &&
          expYear &&
          cvv)
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

        {view === 'pay' && (
          <ShipmentAddress currentState={currentState} email={email} />
        )}

        {view !== 'confirm' && (
          <button
            className={`${styles['summary-btn']}`}
            onClick={() => changeView('next', view)}
            disabled={
              view === 'ship' || view === 'pay' ? checkInputs(view) : false
            }
          >
            {view === 'cart'
              ? 'Shipping'
              : view === 'ship'
              ? 'Payment'
              : `Pay $${getTotal(itemsInCart, discount, shipping).toFixed(2)}`}
          </button>
        )}
      </div>
    );
  }
}

export default Summary;
