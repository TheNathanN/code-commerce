import React, { Component } from 'react';
import styles from './App.module.css';

import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Cart from './components/Cart/Cart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      email: '',
      postCode: '',
      signedIn: false,
      createAccount: false,
      accounts: [],
    };
  }

  inputChangeHandler = (input, event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  toggleState = stateToChange => {
    this.setState({
      [stateToChange]: !this.state[stateToChange],
    });
  };

  createNewAccount = (account, err) => {
    const { accounts } = this.state;

    if (!err) {
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        accounts: [...accounts, account],
        createAccount: false,
      });

      alert('Account has successfully been created.');
    } else {
      alert('Please make sure all of the inputs are filled out correctly.');
    }
  };

  loginUser = (email, pw) => {
    const userInfo = this.state.accounts.find(
      user => user.email === email && user.password === pw
    );

    if (userInfo) {
      this.setState({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        signedIn: true,
      });
      alert('You have succesfully logged in.');
    } else {
      alert('Email or Password has been entered incorrectly.');
    }

    console.log(userInfo); // Delete this conosole log
  };

  render() {
    const {
      password,
      firstName,
      lastName,
      email,
      postCode,
      confirmPassword,
      signedIn,
      createAccount,
      accounts,
    } = this.state;

    return (
      <div className={`container ${styles['app-container']}`}>
        {!signedIn && !createAccount ? (
          <Login
            email={email}
            password={password}
            createAccount={createAccount}
            inputChangeHandler={this.inputChangeHandler}
            toggleState={this.toggleState}
            loginUser={this.loginUser}
          />
        ) : !signedIn ? (
          <SignUp
            password={password}
            firstName={firstName}
            lastName={lastName}
            email={email}
            postCode={postCode}
            confirmPassword={confirmPassword}
            accounts={accounts}
            createAccount={createAccount}
            inputChangeHandler={this.inputChangeHandler}
            toggleState={this.toggleState}
            createNewAccount={this.createNewAccount}
          />
        ) : (
          <Cart />
        )}
      </div>
    );
  }
}

export default App;
