import React, { Component } from 'react';
import Promo from '../Promo/Promo';
import Total from '../Total/Total';
import styles from './Summary.module.css';

export class Summary extends Component {
  render() {
    const { itemsInCart, view, discount, shipping, verifyDiscount } =
      this.props;

    return (
      <div className={`${styles['summary-container']}`}>
        <header>Summary</header>
        <Promo verifyDiscount={verifyDiscount} />
        <Total
          itemsInCart={itemsInCart}
          discount={discount}
          shipping={shipping}
        />
      </div>
    );
  }
}

export default Summary;
