import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import styles from './Cart.module.css';

export class Cart extends Component {
  render() {
    const { itemsInCart, changeQuantity, removeItem } = this.props;

    return (
      <div className={`${styles['cart-container']}`}>
        <div className={`${styles['cart-table']}`}>
          <div className={`${styles['cart-header']}`}>
            <div className='cart-col-1'>PRODUCT</div>
            <div className='cart-col-2'>PRICE</div>
            <div className='cart-col-3'>QUANTITY</div>
            <div className='cart-col-4'>TOTAL PRICE</div>
          </div>

          <div className={`${styles['cart-body']}`}>
            <main className={`${styles['products-container']}`}>
              {Object.keys(itemsInCart).map(product => (
                <ProductRow
                  key={itemsInCart[product].id}
                  id={itemsInCart[product].id}
                  img={itemsInCart[product].img}
                  productName={itemsInCart[product].name}
                  gender={itemsInCart[product].gender}
                  color={itemsInCart[product].color}
                  size={itemsInCart[product].size}
                  price={itemsInCart[product].price}
                  quantity={itemsInCart[product].quantity}
                  totalPrice={
                    itemsInCart[product].price * itemsInCart[product].quantity
                  }
                  changeQuantity={changeQuantity}
                  removeItem={removeItem}
                />
              ))}
            </main>

            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
