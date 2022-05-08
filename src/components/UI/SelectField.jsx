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
          {options.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectField;
