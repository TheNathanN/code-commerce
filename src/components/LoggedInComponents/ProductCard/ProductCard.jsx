import React, { Component } from 'react';
import styles from './ProductCard.module.css';

import { formatMoney } from '../../../helpers/helperFunctions';

export class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { name, img, color, size, quantity, price } = product;

    return (
      <div className={`${styles['card-container']}`}>
        <img className={`${styles['product-img']}`} src={img} alt={name} />

        <div className={`${styles['labels-container']}`}>
          <p className={`${styles['labels-header']}`}>{name}</p>

          <div>
            <div>
              <div className={`${styles['label-container']}`}>
                <p className={`${styles['label']}`}>Color:</p>
                <p>{color}</p>
              </div>
              <div className={`${styles['label-container']}`}>
                <p className={`${styles['label']}`}>Size:</p>
                <p>{size}</p>
              </div>
            </div>

            <div className={`${styles['labels-container-child']}`}>
              <div className={`${styles['label-container']}`}>
                <p className={`${styles['label']}`}>Qty:</p>
                <p>{quantity}</p>
              </div>

              <p className={`${styles['price']}`}>{formatMoney(price)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
