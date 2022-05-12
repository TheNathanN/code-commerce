import React, { Component } from 'react';

import styles from './ShipmentAddress.module.css';

export class ShipmentAddress extends Component {
  render() {
    const { currentState, email } = this.props;

    const {
      addressTitle,
      address,
      zipCode,
      city,
      state,
      country,
      shippingMode,
    } = currentState;

    return (
      <div className={`${styles['shipment-address-container']}`}>
        <div className={`${styles['address-container']}`}>
          <p className={`${styles['address-header']}`}>SHIPMENT ADDRESS</p>
          <p className={`${styles['address-data']}`}>{addressTitle}</p>
          <p className={`${styles['address-data']}`}>{address}</p>
          <p className={`${styles['address-data']}`}>
            {zipCode} {city} {state}
          </p>
          <p className={`${styles['address-data']}`}>{country}</p>
          <p className={`${styles['address-data']}`}>Email: {email}</p>
        </div>

        <div className={`${styles['shipping-method-container']}`}>
          <p className={`${styles['address-header']}`}>SHIPMENT METHOD</p>
          {shippingMode === 'standard' ? (
            <>
              <p className={`${styles['shipping-method-header']}`}>STANDARD</p>
              <p className={`${styles['shipping-method-info']}`}>
                Delivery in 4-6 business days
              </p>
            </>
          ) : (
            <>
              <p className={`${styles['shipping-method-header']}`}>EXPRESS</p>
              <p className={`${styles['shipping-method-info']}`}>
                Delivery in 1-3 business days
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default ShipmentAddress;
