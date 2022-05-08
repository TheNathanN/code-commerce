import React, { Component } from 'react';

import styles from './PhoneInputs.module.css';

import InputField from '../../UI/InputField';

export class PhoneInputs extends Component {
  render() {
    const { phoneNumberTemplate } = this.props;

    return (
      <div className={`${styles['phone-inputs-container']}`}>
        {phoneNumberTemplate.map(input => (
          <InputField
            key={input.id}
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            value={input.value}
            changeHandler={input.changeHandler}
            required={input.required}
            error={input.error}
            loggedIn={true}
          />
        ))}
      </div>
    );
  }
}

export default PhoneInputs;
