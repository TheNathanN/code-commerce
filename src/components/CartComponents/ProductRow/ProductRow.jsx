import React, { Component } from 'react';
import styles from './ProductRow.module.css';

export class ProductRow extends Component {
  render() {
    const {
      id,
      img,
      productName,
      gender,
      color,
      size,
      price,
      quantity,
      totalPrice,
      changeQuantity,
      removeItem,
    } = this.props;

    return (
      <div className={`${styles['product-info-container']}`}>
        <i
          className={`fa-solid fa-circle-xmark ${styles['close-icon']}`}
          onClick={() => removeItem(id)}
        ></i>
        <div className={`cart-col-1 ${styles['product-info']}`}>
          <img
            src={img}
            alt={productName}
            className={`${styles['product-img']}`}
          />
          <div className={`${styles['product-details']}`}>
            <p className={`${styles['gender']}`}>{gender}</p>
            <p className={`${styles['name']}`}>{productName}</p>
            <div className={`${styles['product-metadata']}`}>
              <p className={styles['meta-label']}>Color:</p>{' '}
              <p className={styles['meta-value']}>{color}</p>
            </div>
            <div className={`${styles['product-metadata']}`}>
              <p className={styles['meta-label']}>Size:</p>{' '}
              <p className={styles['meta-value']}>{size}</p>
            </div>
          </div>
        </div>

        <div className={`cart-col-2 ${styles['product-price-container']}`}>
          <p>${price}</p>
        </div>

        <div className={`cart-col-3 ${styles['product-qty-container']}`}>
          <input
            type='number'
            name='quantity'
            value={quantity}
            onChange={e => changeQuantity(id, e)}
            className={`${styles['qty-input']}`}
          />
        </div>

        <div className={`cart-col-4 ${styles['product-price-container']}`}>
          <p>${totalPrice}</p>
        </div>
      </div>
    );
  }
}

export default ProductRow;
