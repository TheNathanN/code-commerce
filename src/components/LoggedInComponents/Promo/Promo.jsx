import React, { Component } from 'react';
import styles from './Promo.module.css';

export class Promo extends Component {
  constructor() {
    super();
    this.state = {
      codeEntered: '',
    };
  }

  codeInputHandler = event => {
    this.setState({
      codeEntered: event.target.value,
    });
  };

  render() {
    const { codeEntered } = this.state;
    const { verifyDiscount } = this.props;

    return (
      <form
        className={`${styles['promo-container']}`}
        onSubmit={e => {
          e.preventDefault();
          verifyDiscount(codeEntered);
          this.setState({
            codeEntered: '',
          });
        }}
      >
        <label htmlFor='promo'>Do you have a promo code?</label>

        <div className={`${styles['input-container']}`}>
          <input
            id='promo'
            name='promo'
            type='text'
            placeholder='Code'
            className={`${styles['promo-input']}`}
            onChange={e => this.codeInputHandler(e)}
            value={codeEntered}
          />
          <input
            type='submit'
            className={`${styles['promo-btn']}`}
            value='APPLY'
            disabled={codeEntered === ''}
          />
        </div>
      </form>
    );
  }
}

export default Promo;
