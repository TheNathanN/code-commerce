import React, { Component } from 'react';
import styles from './Shipping.module.css';

import { countryOptions } from '../../../helpers/inputOptions';
import BasicInputs from '../BasicInputs/BasicInputs';
import ShippingInputs from '../ShippingInputs/ShippingInputs';
import PhoneInputs from '../PhoneInputs/PhoneInputs';

export class Shipping extends Component {
  constructor() {
    super();
    this.state = {
      addressTitle: '',
      name: '',
      address: '',
      zipCode: '',
      country: '',
      city: '',
      state: '',
      cellPhone: '',
      telephone: '',
    };
  }

  changeHandler = (state, event) => {
    this.setState({
      [state]: event.target.value,
    });
  };

  render() {
    const {
      addressTitle,
      name,
      address,
      zipCode,
      country,
      city,
      state,
      cellPhone,
      telephone,
    } = this.state;

    const basicShippingTemplate = [
      {
        id: 0,
        name: 'addressTitle',
        placeholder: 'Address Title',
        type: 'text',
        value: addressTitle,
        required: true,
        changeHandler: this.changeHandler,
      },
      {
        id: 1,
        name: 'name',
        placeholder: 'Name - Surname',
        type: 'text',
        value: name,
        required: true,
        changeHandler: this.changeHandler,
      },
    ];

    const shippingDetailsTemplate = [
      {
        id: 2,
        name: 'address',
        placeholder: 'Address',
        type: 'text',
        value: address,
        required: true,
        changeHandler: this.changeHandler,
      },
      {
        id: 3,
        name: 'zipCode',
        placeholder: 'Zip Code',
        type: 'number',
        value: zipCode,
        required: true,
        changeHandler: this.changeHandler,
      },
      {
        id: 4,
        name: 'country',
        placeholder: 'Country',
        type: 'select',
        value: country,
        required: true,
        options: countryOptions,
        changeHandler: this.changeHandler,
      },
      {
        id: 5,
        name: 'city',
        placeholder: 'City',
        type: 'text',
        value: city,
        required: true,
        changeHandler: this.changeHandler,
      },
      {
        id: 6,
        name: 'state',
        placeholder: 'State',
        type: 'text',
        value: state,
        required: true,
        changeHandler: this.changeHandler,
      },
    ];

    const phoneNumberTemplate = [
      {
        id: 7,
        name: 'cellPhone',
        placeholder: 'Cell Phone',
        type: 'number',
        value: cellPhone,
        required: true,
        changeHandler: this.changeHandler,
      },
      {
        id: 8,
        name: 'telephone',
        placeholder: 'Telephone',
        type: 'number',
        value: telephone,
        required: true,
        changeHandler: this.changeHandler,
      },
    ];

    return (
      <div className={`${styles['shipping-container']}`}>
        <p className={`${styles['shipping-header']}`}>Shipping Information</p>
        <BasicInputs basicShippingTemplate={basicShippingTemplate} />
        <ShippingInputs shippingDetailsTemplate={shippingDetailsTemplate} />
        <PhoneInputs phoneNumberTemplate={phoneNumberTemplate} />
      </div>
    );
  }
}

export default Shipping;
