import React, { Component } from 'react';
import styles from './FormFooter.module.css';

export class FormFooter extends Component {
  render() {
    return (
      <div className={styles['form-footer']}>
        <div className={styles['cancel-btn']}>
          <a href='#'>Cancel</a>
        </div>
        <div className={styles['policy-container']}>
          <a href='#'>Privacy Policy and Cookies</a> |{' '}
          <a href='#'>Terms of Sale and Use</a>
        </div>
      </div>
    );
  }
}

export default FormFooter;
