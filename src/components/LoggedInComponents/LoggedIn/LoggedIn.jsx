import React, { Component } from 'react';
import styles from './LoggedIn.module.css';

import Cart from '../../CartComponents/Cart/Cart';
import Summary from '../Summary/Summary';
import ProgressBar from '../ProgressBar/ProgressBar';
import Shipping from '../../ShippingComponents/Shipping/Shipping';

export class LoggedIn extends Component {
  constructor() {
    super();
    this.state = {
      // --------------------------------------
      // View controls what's showing on screen
      view: 'cart',
      // 'cart' || 'ship' || 'pay' || 'confirm'
      // --------------------------------------

      // --------------------
      // Shopping Cart State
      // --------------------
      discount: 0,
      discountCodes: [{ discountCode: 15 }, { anotherCode: 25 }],
      itemsInCart: {
        1: {
          id: 1,
          img: 'https://images.unsplash.com/photo-1651489330304-6b7521930deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Warm Winter Coat',
          gender: 'Women',
          color: 'Brown',
          size: 'Small',
          price: 45,
          quantity: 1,
        },
        2: {
          id: 2,
          img: 'https://images.unsplash.com/photo-1651421311530-7be8dd4f659f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Street Style Flannel Jacket',
          gender: 'Men',
          color: 'Gray',
          size: 'Medium',
          price: 30,
          quantity: 1,
        },
        3: {
          id: 3,
          img: 'https://images.unsplash.com/photo-1610971309274-4a7e4081f40b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Puffy White Kids Jacket',
          gender: 'Children',
          color: 'White',
          size: 'X-Small',
          price: 35,
          quantity: 2,
        },
      },

      // -------------------
      // Shipping Form State
      // -------------------
      shippingMode: 'standard', // 'standard' || 'express'
      shipping: 0,
      addressTitle: '',
      name: '',
      address: '',
      zipCode: '',
      country: '',
      city: '',
      state: '',
      cellPhone: '',
      telephone: '',
    };
  }

  toggleShippingMode = shippingMode => {
    if (shippingMode === 'standard') {
      this.setState({
        shippingMode: 'express',
        shipping: 5,
      });
    } else {
      this.setState({
        shippingMode: 'standard',
        shipping: 0,
      });
    }
  };

  changeQuantity = (itemId, event) => {
    this.setState({
      itemsInCart: {
        ...this.state.itemsInCart,
        [itemId]: {
          ...this.state.itemsInCart[itemId],
          quantity: event.target.value > 0 ? event.target.value : 1,
        },
      },
    });
  };

  removeItem = itemId => {
    const { itemsInCart } = this.state;
    const asArray = Object.entries(itemsInCart);
    const filter = asArray.filter(([key, value]) => +key !== itemId);
    const filteredItems = Object.fromEntries(filter);

    this.setState({
      itemsInCart: filteredItems,
    });
  };

  changeView = (direction, view) => {
    const views = ['cart', 'ship', 'pay', 'confirm'];
    const currentIndex = views.indexOf(view);

    if (direction === 'next' && currentIndex + 1 <= views.length) {
      this.setState({
        view: views[currentIndex + 1],
      });
    } else if (direction === 'back' && currentIndex >= 0) {
      this.setState({
        view: views[currentIndex - 1],
      });
    } else {
      alert('There is an error in the changeView function.');
    }
  };

  verifyDiscount = codeEntered => {
    const { discountCodes } = this.state;
    let newDiscount = 0;

    const discountFound = discountCodes.find(
      code => Object.keys(code)[0] === codeEntered
    );

    if (discountFound) {
      const discount = Object.values(discountFound)[0];

      newDiscount = discount;

      alert(`Your discount saved you $${discount}.00`);
    } else {
      alert('Code entered is invalid');
    }

    this.setState({
      discount: newDiscount,
    });
  };

  inputChangeHandler = (state, event) => {
    this.setState({
      [state]: event.target.value,
    });
  };

  toggleState = stateToChange => {
    this.setState({
      [stateToChange]: !this.state[stateToChange],
    });
  };

  render() {
    const { itemsInCart, view } = this.state;

    return (
      <div className={`${styles['loggedIn-container']}`}>
        <div className={`${styles['main-container']}`}>
          <ProgressBar view={view} />

          {view === 'cart' && (
            <Cart
              itemsInCart={itemsInCart}
              changeQuantity={this.changeQuantity}
              removeItem={this.removeItem}
            />
          )}

          {view === 'ship' && (
            <Shipping
              currentState={this.state}
              inputChangeHandler={this.inputChangeHandler}
              toggleState={this.toggleState}
              toggleShippingMode={this.toggleShippingMode}
              changeView={this.changeView}
              view={view}
            />
          )}
        </div>

        <Summary
          currentState={this.state}
          verifyDiscount={this.verifyDiscount}
          changeView={this.changeView}
        />
      </div>
    );
  }
}

export default LoggedIn;
