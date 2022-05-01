import React, { Component } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import styles from './InputField.module.css';

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }

  toggleHidden = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  render() {
    const {
      type,
      value,
      changeHandler,
      name,
      placeholder,
      required,
      error,
      instructions,
      taken,
    } = this.props;

    const { hidden } = this.state;

    const formattedPlaceholder = placeholder.replace('*', '');

    return (
      <div className={styles['input-container']}>
        <label htmlFor={name}>{placeholder}</label>
        <input
          id={name}
          type={hidden ? type : 'text'}
          value={value}
          onChange={e => changeHandler(name, e)}
          name={name}
          required={required}
          className={
            error || taken
              ? `${styles['basic-input']} ${styles['input-error']}`
              : styles['basic-input']
          }
        />

        {type === 'password' && (
          <div className={styles['eye-icon']} onClick={this.toggleHidden}>
            {hidden ? <EyeIcon /> : <EyeOffIcon />}
          </div>
        )}

        {error && (
          <p className={styles['error-msg']}>
            {formattedPlaceholder} was entered incorrectly.
          </p>
        )}

        {taken && (
          <p className={styles['error-msg']}>
            {formattedPlaceholder} has already been used.
          </p>
        )}

        {instructions && (
          <p className={styles['instructions']}>{instructions}</p>
        )}
      </div>
    );
  }
}

export default InputField;
