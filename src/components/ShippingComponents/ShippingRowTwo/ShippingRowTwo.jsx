import React, { Component } from 'react';
import InputField from '../../UI/InputField';
import SelectField from '../../UI/SelectField';

import styles from './ShippingRowTwo.module.css';

export class ShippingRowTwo extends Component {
  render() {
    const { rowTwoInputs } = this.props;

    return (
      <div className={`${styles['row-two-container']}`}>
        {rowTwoInputs.map(input => {
          if (input.type === 'select') {
            return (
              <SelectField
                key={input.id}
                name={input.name}
                placeholder={input.placeholder}
                value={input.value}
                changeHandler={input.changeHandler}
                required={input.required}
                options={input.options}
              />
            );
          } else {
            return (
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
            );
          }
        })}
      </div>
    );
  }
}

export default ShippingRowTwo;
