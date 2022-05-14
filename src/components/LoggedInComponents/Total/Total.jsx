import React, { Component } from 'react';
import styles from './Total.module.css';

import { formatMoney, getTotal } from '../../../helpers/helperFunctions';

export class Total extends Component {
  render() {
    const { itemsInCart, discount, shipping } = this.props;

    const totalTemplate = [
      {
        id: 1,
        label: 'Cart Subtotal',
        value: getTotal(itemsInCart),
      },
      {
        id: 2,
        label: 'Shipping & Handling',
        value: shipping,
      },
      {
        id: 3,
        label: 'Discount',
        value: discount,
        style: { color: 'var(--light-green)' },
      },
      {
        id: 4,
        label: 'Cart Total',
        value: getTotal(itemsInCart, discount, shipping),
        style: { color: 'var(--red)' },
      },
    ];

    return (
      <div className={`${styles['total-container']}`}>
        {totalTemplate.map(data => (
          <div className={`${styles['total-data']}`} key={data.id}>
            <p className={`${styles['total-col-1']}`}>{data.label}:</p>
            <p
              className={`${styles['total-col-2']}`}
              style={data.style && data.value > 0 ? data.style : {}}
            >
              {data.value ? formatMoney(data.value) : '-'}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Total;
