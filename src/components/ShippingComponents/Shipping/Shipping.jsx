import React, { Component } from 'react';
import styles from './Shipping.module.css';

import { countryOptions } from '../../../helpers/inputOptions';

import BasicInputs from '../BasicInputs/BasicInputs';
import ShippingInputs from '../ShippingInputs/ShippingInputs';
import PhoneInputs from '../PhoneInputs/PhoneInputs';
import ShippingMethod from '../ShippingMethod/ShippingMethod';

export class Shipping extends Component {
  render() {
    const {
      currentState,
      inputChangeHandler,
      toggleState,
      toggleShippingMode,
      changeView,
      view,
    } = this.props;

    const {
      shippingMode,
      addressTitle,
      name,
      address,
      zipCode,
      country,
      city,
      state,
      cellPhone,
      telephone,
    } = currentState;

    const basicShippingTemplate = [
      {
        id: 0,
        name: 'addressTitle',
        placeholder:
          'Title * (ex. home, apartment name, business name, etc...)',
        type: 'text',
        value: addressTitle,
        required: true,
        changeHandler: inputChangeHandler,
      },
      {
        id: 1,
        name: 'name',
        placeholder: 'Name - Surname *',
        type: 'text',
        value: name,
        required: true,
        changeHandler: inputChangeHandler,
      },
    ];

    const shippingDetailsTemplate = [
      {
        id: 2,
        name: 'address',
        placeholder: 'Address *',
        type: 'text',
        value: address,
        required: true,
        changeHandler: inputChangeHandler,
      },
      {
        id: 3,
        name: 'zipCode',
        placeholder: 'Zip Code *',
        type: 'number',
        value: zipCode,
        required: true,
        changeHandler: inputChangeHandler,
      },
      {
        id: 4,
        name: 'country',
        placeholder: 'Country *',
        type: 'select',
        value: country,
        required: true,
        options: countryOptions,
        changeHandler: inputChangeHandler,
      },
      {
        id: 5,
        name: 'city',
        placeholder: 'City *',
        type: 'text',
        value: city,
        required: true,
        changeHandler: inputChangeHandler,
      },
      {
        id: 6,
        name: 'state',
        placeholder: 'State *',
        type: 'text',
        value: state,
        required: true,
        changeHandler: inputChangeHandler,
      },
    ];

    const phoneNumberTemplate = [
      {
        id: 7,
        name: 'cellPhone',
        placeholder: 'Cell Phone *',
        type: 'number',
        value: cellPhone,
        required: true,
        changeHandler: inputChangeHandler,
      },
      {
        id: 8,
        name: 'telephone',
        placeholder: 'Telephone *',
        type: 'number',
        value: telephone,
        required: true,
        changeHandler: inputChangeHandler,
      },
    ];

    return (
      <div className={`${styles['shipping-container']}`}>
        <p className={`${styles['shipping-header']}`}>Shipping Information</p>
        <BasicInputs basicShippingTemplate={basicShippingTemplate} />
        <ShippingInputs shippingDetailsTemplate={shippingDetailsTemplate} />
        <PhoneInputs phoneNumberTemplate={phoneNumberTemplate} />

        <ShippingMethod
          shippingMode={shippingMode}
          toggleState={toggleState}
          inputChangeHandler={inputChangeHandler}
          toggleShippingMode={toggleShippingMode}
          changeView={changeView}
          view={view}
        />
      </div>
    );
  }
}

export default Shipping;
