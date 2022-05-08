import React, { Component } from 'react';
import InputField from '../../UI/InputField';
import ShippingRowTwo from '../ShippingRowTwo/ShippingRowTwo';

import styles from './ShippingInputs.module.css';

export class ShippingInputs extends Component {
  render() {
    const { shippingDetailsTemplate } = this.props;

    const rowTwoInputs = shippingDetailsTemplate.filter(
      input => input.id !== 2
    );

    return (
      <div className={`${styles['shipping-inputs-container']}`}>
        <InputField
          key={shippingDetailsTemplate[0].id}
          name={shippingDetailsTemplate[0].name}
          placeholder={shippingDetailsTemplate[0].placeholder}
          type={shippingDetailsTemplate[0].type}
          value={shippingDetailsTemplate[0].value}
          changeHandler={shippingDetailsTemplate[0].changeHandler}
          required={shippingDetailsTemplate[0].required}
          error={shippingDetailsTemplate[0].error}
          loggedIn={true}
        />

        <ShippingRowTwo rowTwoInputs={rowTwoInputs} />
      </div>
    );
  }
}

export default ShippingInputs;
