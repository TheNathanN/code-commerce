import React, { Component } from 'react';
import styles from './ProductRow.module.css';

export class ProductRow extends Component {
  render() {
    const {
      img,
      productName,
      gender,
      color,
      size,
      price,
      quantity,
      totalPrice,
    } = this.props;

    return (
      <tr className={`${styles['product-row']}`}>
        <td>
          <div className={`container ${styles['product-info-container']}`}>
            <div className={`${styles['product-info']}`}>
              <img
                src={img}
                alt={productName}
                className={`${styles['product-img']}`}
              />
              <div className={`${styles['product-details']}`}>
                <p className={`${styles['gender']}`}>{gender}</p>
                <p className={`${styles['name']}`}>{productName}</p>
                <p className={`${styles['product-metadata']}`}>
                  Color: <span>{color}</span>
                </p>
                <p className={`${styles['product-metadata']}`}>
                  Size: <span>{size}</span>
                </p>
              </div>
            </div>

            <div className={`${styles['product-price-container']}`}>
              <p>${price}</p>
            </div>

            <div className={`${styles['product-qty-container']}`}>
              <input
                type='number'
                name='quantity'
                value={quantity}
                className={`${styles['qty-input']}`}
              />
            </div>

            <div className={`${styles['product-price-container']}`}>
              <p>${totalPrice}</p>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
