import React, { Component } from 'react';
import styles from './Total.module.css';

import { formatMoney } from '../../../helpers/helperFunctions';

export class Total extends Component {
  render() {
    const { itemsInCart, discount, shipping } = this.props;
    const itemKeys = Object.keys(itemsInCart);

    const getTotal = () => {
      const prices = [];

      itemKeys.forEach(key => {
        const total = itemsInCart[key].price * itemsInCart[key].quantity;
        prices.push(total);
      });

      return prices.reduce((acc, num) => {
        return acc + num;
      }, 0);
    };

    const totalTemplate = [
      {
        id: 1,
        label: 'Cart Subtotal',
        value: getTotal(),
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
        value: getTotal() + shipping - discount,
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
