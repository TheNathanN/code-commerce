import React, { Component } from 'react';

import { checkCardType } from '../../../helpers/helperFunctions';

import styles from './PaymentInfo.module.css';

export class PaymentInfo extends Component {
  render() {
    const { currentState } = this.props;

    const { cardType, cardNumber } = currentState;

    const hideCardNumber = card => {
      const hideNum = [];

      for (let i = 0; i < card.length; i++) {
        if (i < card.length - 4) {
          hideNum.push('*');
        } else {
          hideNum.push(card[i]);
        }
      }

      return hideNum.join('');
    };

    return (
      <div className={`${styles['payment-container']}`}>
        <div className={`${styles['payment-header']}`}>Payment Info</div>
        <div className={`${styles['card-info']}`}>
          <img src={checkCardType(cardType)} alt={cardType} />
          <div>{cardType}</div>
        </div>
        <div className={`${styles['card-number']}`}>
          {hideCardNumber(cardNumber)}
        </div>
      </div>
    );
  }
}

export default PaymentInfo;
