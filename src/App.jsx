import React, { Component } from 'react';
import styles from './App.module.css';

import Login from './components/SignInComponents/Login/Login';
import SignUp from './components/SignInComponents/SignUp/SignUp';
import LoggedIn from './components/LoggedIn/LoggedIn';

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
      alert('You have successfully logged in.');
    } else {
      alert('Email or Password has been entered incorrectly.');
    }
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
      <>
        {!signedIn && !createAccount ? (
          <div className={`${styles['signin-container']}`}>
            <Login
              email={email}
              password={password}
              createAccount={createAccount}
              inputChangeHandler={this.inputChangeHandler}
              toggleState={this.toggleState}
              loginUser={this.loginUser}
            />
          </div>
        ) : !signedIn ? (
          <div className={`${styles['signin-container']}`}>
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
          </div>
        ) : (
          <>
            <LoggedIn />
          </>
        )}
      </>
    );
  }
}

export default App;
