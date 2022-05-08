import React, { Component } from 'react';

import InputField from '../../UI/InputField';

import styles from './BasicInputs.module.css';

export class BasicInputs extends Component {
  render() {
    const { basicShippingTemplate } = this.props;

    return (
      <div className={`${styles['basic-inputs-container']}`}>
        {basicShippingTemplate.map(input => (
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

export default BasicInputs;
