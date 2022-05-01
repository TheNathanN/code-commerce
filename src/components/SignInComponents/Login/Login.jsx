import React, { Component } from 'react';
import styles from './Login.module.css';

import InputField from '../../UI/InputField';
import LoginHeader from '../LoginHeader/LoginHeader';
import FormFooter from '../FormFooter/FormFooter';

class Login extends Component {
  render() {
    const {
      email,
      password,
      inputChangeHandler,
      toggleState,
      createAccount,
      loginUser,
    } = this.props;

    const loginTemplate = {
      username: {
        id: 1,
        type: 'email',
        name: 'email',
        placeholder: 'E-Mail',
        value: email,
        required: true,
      },
      password: {
        id: 2,
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        value: password,
        required: true,
      },
    };

    return (
      <div className={`card container ${styles['login-container']}`}>
        <LoginHeader toggleState={toggleState} createAccount={createAccount} />

        {Object.keys(loginTemplate).map(login => {
          const { id, type, name, value, placeholder, required } =
            loginTemplate[login];

          return (
            <InputField
              key={id}
              type={type}
              name={name}
              value={value}
              changeHandler={inputChangeHandler}
              placeholder={placeholder}
              required={required}
            />
          );
        })}

        <button
          className='red-btn'
          type='button'
          onClick={() => loginUser(email, password)}
        >
          Sign In
        </button>

        <FormFooter />
      </div>
    );
  }
}

export default Login;
