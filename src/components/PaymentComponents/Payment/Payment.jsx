import React, { Component } from 'react';
import styles from './Payment.module.css';

import { getTotal } from '../../../helpers/helperFunctions';
import { textErrorChecker } from '../../../helpers/errorHandlers';

import SelectField from '../../UI/SelectField';
import InputField from '../../UI/InputField';

export class Payment extends Component {
  render() {
    const { currentState, changeView, inputChangeHandler } = this.props;

    const {
      shipping,
      discount,
      view,
      itemsInCart,
      cardholderName,
      cardNumber,
      cardType,
      expMonth,
      expYear,
      cvv,
      cardError,
    } = currentState;

    const paymentTemplate = [
      {
        id: 1,
        type: 'text',
        name: 'cardholderName',
        placeholder: 'Cardholder Name',
        value: cardholderName,
        required: true,
        changeHandler: inputChangeHandler,
        error: textErrorChecker(cardholderName),
      },
      {
        id: 2,
        type: 'text',
        name: 'cardNumber',
        placeholder: 'Card Number',
        value: cardNumber,
        required: true,
        changeHandler: inputChangeHandler,
        error: cardError,
      },
      {
        id: 3,
        type: 'select',
        name: 'expMonth',
        placeholder: 'Month',
        value: expMonth,
        required: true,
        changeHandler: inputChangeHandler,
        options: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
        ],
      },
      {
        id: 4,
        type: 'select',
        name: 'expYear',
        placeholder: 'Year',
        value: expYear,
        required: true,
        changeHandler: inputChangeHandler,
        options: [
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
          '2027',
          '2028',
          '2029',
          '2030',
          '2031',
          '2032',
          '2033',
          '2034',
          '2035',
          '2036',
        ],
      },
      {
        id: 5,
        type: 'text',
        name: 'cvv',
        placeholder: 'CVV',
        value: cvv,
        required: true,
        changeHandler: inputChangeHandler,
      },
    ];

    const inputCheck = () => {
      if (
        cardholderName &&
        cardNumber &&
        cardType &&
        expMonth &&
        expYear &&
        cvv
      ) {
        return false;
      }
      return true;
    };

    return (
      <div className={`${styles['payment-container']}`}>
        <h1 className={`${styles['payment-header']}`}>PAYMENT INFORMATION</h1>
        <form>
          {paymentTemplate.map(input => {
            const {
              id,
              name,
              placeholder,
              value,
              changeHandler,
              required,
              options,
              type,
              error,
            } = input;

            if (type === 'select') {
              return (
                <SelectField
                  key={id}
                  name={name}
                  placeholder={placeholder}
                  value={value}
                  changeHandler={changeHandler}
                  required={required}
                  options={options}
                />
              );
            } else {
              return (
                <InputField
                  key={id}
                  type={type}
                  value={value}
                  changeHandler={changeHandler}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  error={error}
                  cardType={cardType}
                  view={view}
                />
              );
            }
          })}
        </form>

        <div className={`${styles['btn-container']}`}>
          <button
            className={`${styles['back-btn']}`}
            onClick={() => {
              changeView('back', view);
              window.scrollTo(1, 1);
            }}
          >
            BACK TO ADDRESS
          </button>
          <button
            className={`${styles['checkout-btn']}`}
            onClick={() => {
              changeView('next', view);
              window.scrollTo(1, 1);
            }}
            disabled={inputCheck()}
          >
            PAY ${getTotal(itemsInCart, discount, shipping).toFixed(2)}
          </button>
        </div>
      </div>
    );
  }
}

export default Payment;
