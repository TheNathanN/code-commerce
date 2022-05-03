import React, { Component } from 'react';
import styles from './LoggedIn.module.css';

import Cart from '../CartComponents/Cart/Cart';

export class LoggedIn extends Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

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

  render() {
    return (
      <div className={`${styles['cart-container']}`}>
        <Cart
          itemsInCart={this.state.itemsInCart}
          changeQuantity={this.changeQuantity}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default LoggedIn;
