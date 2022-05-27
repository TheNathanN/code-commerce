import React, { Component } from 'react';

import SelectBtn from '../../UI/SelectBtn';

import styles from './ShippingMethod.module.css';

export class ShippingMethod extends Component {
  render() {
    const { toggleShippingMode, shippingMode, changeView, view } = this.props;

    return (
      <div className={`${styles['shipping-method-container']}`}>
        <h2 className={`${styles['shipping-method-header']}`}>
          Shipping Method
        </h2>

        <div>
          <div className={`${styles['shipping-select-container']}`}>
            <SelectBtn
              buttonType='standard'
              label='STANDARD'
              toggleShippingMode={toggleShippingMode}
              shippingMode={shippingMode}
              toggle='standard'
            />
            <p>Delivery in 4-6 Business Days - Free ($40 min)</p>
          </div>

          <div className={`${styles['shipping-select-container']}`}>
            <SelectBtn
              buttonType='express'
              label='EXPRESS'
              toggleShippingMode={toggleShippingMode}
              shippingMode={shippingMode}
              toggle='express'
            />
            <p>Delivery in 1-3 Business Days - $5.00</p>
            <a href='#'>View Shipping Details</a>
          </div>
        </div>

        <button
          className={`${styles['method-btn']}`}
          onClick={() => changeView('back', view)}
        >
          BACK TO CART
        </button>
      </div>
    );
  }
}

export default ShippingMethod;
