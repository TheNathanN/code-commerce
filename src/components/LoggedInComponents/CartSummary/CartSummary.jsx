import React, { Component } from 'react';
import styles from './CartSummary.module.css';

import { getCount, pluralChecker } from '../../../helpers/helperFunctions';
import ProductCard from '../ProductCard/ProductCard';

export class CartSummary extends Component {
  render() {
    const { view, itemsInCart } = this.props;
    const count = getCount(itemsInCart);

    return (
      <div className={`${styles['cart-summary-container']}`}>
        <p className={`${styles['cart-summary-header']}`}>
          <span>
            {count} item{pluralChecker(count)}
          </span>{' '}
          in your bag
        </p>

        <div className={`${styles['product-card-container']}`}>
          {Object.keys(itemsInCart).map(product => (
            <ProductCard
              key={itemsInCart[product].id}
              product={itemsInCart[product]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CartSummary;
