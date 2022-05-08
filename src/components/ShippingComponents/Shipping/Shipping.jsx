import React, { Component } from 'react';
import styles from './Shipping.module.css';

import { countryOptions } from '../../../helpers/inputOptions';

export class Shipping extends Component {
  constructor() {
    super();
    this.state = {
      addressTitle: '',
      name: '',
      address: '',
      zipCode: 0,
      country: '',
      city: '',
      state: '',
      cellPhone: 0,
      telephone: 0,
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
      },
      {
        id: 1,
        name: 'name',
        placeholder: 'Name - Surname',
        type: 'text',
        value: name,
        required: true,
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
      },
      {
        id: 3,
        name: 'zipCode',
        placeholder: 'Zip Code',
        type: 'number',
        value: zipCode,
        required: true,
      },
      {
        id: 4,
        name: 'country',
        placeholder: 'Country',
        type: 'select',
        value: country,
        required: true,
        options: countryOptions,
      },
      {
        id: 5,
        name: 'city',
        placeholder: 'City',
        type: 'text',
        value: city,
        required: true,
      },
      {
        id: 6,
        name: 'state',
        placeholder: 'State',
        type: 'text',
        value: state,
        required: true,
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
      },
      {
        id: 8,
        name: 'telephone',
        placeholder: 'Telephone',
        type: 'number',
        value: telephone,
        required: true,
      },
    ];

    return (
      <div className={`${styles['shipping-container']}`}>
        <p className={`${styles['shipping-header']}`}>Shipping Information</p>
      </div>
    );
  }
}

export default Shipping;
