import React, { Component } from 'react';
import styles from './ProgressBar.module.css';

export class ProgressBar extends Component {
  render() {
    return (
      <div className={`${styles['progress-container']}`}>
        <i className={`fa-solid fa-cart-shopping ${styles['completed']}`}></i>
        <hr />
        <i className={`fa-solid fa-truck`}></i>
        <hr />
        <i className={`fa-solid fa-credit-card`}></i>
        <hr />
        <i className={`fa-solid fa-check`}></i>
      </div>
    );
  }
}

export default ProgressBar;
