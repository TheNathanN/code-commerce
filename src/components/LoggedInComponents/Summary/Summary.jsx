import React, { Component } from 'react';
import Promo from '../Promo/Promo';
import styles from './Summary.module.css';

export class Summary extends Component {
  render() {
    const { itemsInCart, view, discount, shipping, verifyDiscount } =
      this.props;

    return (
      <div className={`${styles['summary-container']}`}>
        <header>Summary</header>
        <Promo verifyDiscount={verifyDiscount} />

        <div className={`${styles['total-container']}`}></div>
      </div>
    );
  }
}

export default Summary;
