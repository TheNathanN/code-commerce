import React, { Component } from 'react';
import styles from './ProgressBar.module.css';

export class ProgressBar extends Component {
  render() {
    const { view } = this.props;

    return (
      <div className={`${styles['progress-container']}`}>
        <i className={`fa-solid fa-cart-shopping ${styles['completed']}`}></i>
        <hr className={`${view !== 'cart' && styles['completed']}`} />
        <i
          className={`fa-solid fa-truck ${
            view !== 'cart' && styles['completed']
          }`}
        ></i>
        <hr
          className={`${
            view !== 'cart' && view !== 'ship' && styles['completed']
          }`}
        />
        <i
          className={`fa-solid fa-credit-card ${
            view !== 'cart' && view !== 'ship' && styles['completed']
          }`}
        ></i>
        <hr className={`${view === 'confirm' && styles['completed']}`} />
        <i
          className={`fa-solid fa-check ${
            view === 'confirm' && styles['completed']
          }`}
        ></i>
      </div>
    );
  }
}

export default ProgressBar;
