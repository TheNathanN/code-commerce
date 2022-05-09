import React, { Component } from 'react';

import styles from './SelectField.module.css';

export class SelectField extends Component {
  render() {
    const { name, placeholder, value, changeHandler, required, options } =
      this.props;

    return (
      <div className={styles['select-field-container']}>
        <label htmlFor={name}>{placeholder}</label>
        <select
          name={name}
          id={name}
          value={value}
          required={required}
          onChange={e => changeHandler(name, e)}
        >
          <option value='select' hidden>
            Select
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectField;
