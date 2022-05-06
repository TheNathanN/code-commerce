import React, { Component } from 'react';
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
        <header>Summary</header>
        {view === 'cart' && <Promo verifyDiscount={verifyDiscount} />}
        <Total
          itemsInCart={itemsInCart}
          discount={discount}
          shipping={shipping}
        />

        <button onClick={() => changeView('next', view)}>
          {view === 'cart' ? 'Enter Shipping' : 'Checkout'}
        </button>
      </div>
    );
  }
}

export default Summary;
