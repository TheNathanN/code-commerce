import React, { Component } from 'react';
import styles from './SignUp.module.css';

import InputField from '../UI/InputField';
import LoginHeader from '../LoginHeader/LoginHeader';
import FormFooter from '../FormFooter/FormFooter';

import {
  emailErrorChecker,
  passwordErrorChecker,
  confirmPasswordErrorChecker,
  nameErrorChecker,
} from '../../helpers/errorHandlers';

export class SignUp extends Component {
  render() {
    const {
      password,
      firstName,
      lastName,
      email,
      postCode,
      createAccount,
      confirmPassword,
      accounts,
      inputChangeHandler,
      toggleState,
      createNewAccount,
    } = this.props;

    const signUpTemplate = {
      email: {
        id: 1,
        type: 'email',
        name: 'email',
        placeholder: 'E-Mail Address *',
        value: email,
        required: true,
        error: emailErrorChecker(email),
      },
      password: {
        id: 2,
        type: 'password',
        name: 'password',
        placeholder: 'Password *',
        instructions:
          'Password must be 8-20 characters, including at least one capital letter, at least one small letter, one number and one special character - ! @ # $ % ^ & * () _ + .',
        value: password,
        required: true,
        error: passwordErrorChecker(password),
      },
      confirmPassword: {
        id: 3,
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm Password *',
        value: confirmPassword,
        required: true,
        error: confirmPasswordErrorChecker(password, confirmPassword),
      },
      firstName: {
        id: 4,
        type: 'text',
        name: 'firstName',
        placeholder: 'First Name *',
        value: firstName,
        required: true,
        error: nameErrorChecker(firstName),
      },
      lastName: {
        id: 5,
        type: 'text',
        name: 'lastName',
        placeholder: 'Last Name *',
        value: lastName,
        required: true,
        error: nameErrorChecker(lastName),
      },
      postCode: {
        id: 6,
        type: 'number',
        name: 'postCode',
        placeholder: 'Postcode',
        value: postCode,
        required: false,
        error: false,
      },
    };

    const newAccountInfo = {
      id: accounts.length + 1,
      firstName,
      lastName,
      email,
      password,
      postCode,
    };

    return (
      <div className={`card container ${styles['signup-container']}`}>
        <LoginHeader toggleState={toggleState} createAccount={createAccount} />

        {Object.keys(signUpTemplate).map(info => {
          const {
            id,
            type,
            name,
            value,
            placeholder,
            required,
            error,
            instructions,
          } = signUpTemplate[info];

          return (
            <InputField
              key={id}
              type={type}
              name={name}
              value={value}
              changeHandler={inputChangeHandler}
              placeholder={placeholder}
              required={required}
              error={error}
              instructions={instructions}
            />
          );
        })}

        <button
          className='red-btn'
          type='button'
          onClick={() => createNewAccount(newAccountInfo)}
        >
          SAVE
        </button>

        <div className={styles['line-container']}>
          <hr className={`${styles['line']} ${styles['line-one']}`} />
          <p>or</p>
          <hr className={`${styles['line']} ${styles['line-two']}`} />
        </div>

        <button type='button' className='fb-btn'>
          <i className='fa-brands fa-facebook-f'></i> SIGN UP WIH FACEBOOK
        </button>

        <FormFooter />
      </div>
    );
  }
}

export default SignUp;
