import { useContext } from 'react'
import styles from './Cart.module.css';
import ItemContext from '../../context/ItemContext'

const Cart = () => {
  const {cartItems,dispatchCart} = useContext(ItemContext);
  console.log(cartItems);

  return (
    <div className={styles.cart}>
      <h3>Cart total quantity ({cartItems.totalQuantity})</h3>
      {
        cartItems.items.length < 1 ? (
          <h1>There is no items</h1>
        ) : (
          cartItems.items.map((cartitem) => (
            <div key={cartitem.id}>
              <div className={styles.cartItem}>
              <span className={styles.cartItemName}>{cartitem.name}</span>
              <span className={styles.cartItemPrice}>{cartitem.price}$ &nbsp;<p>x{cartitem.amount}</p></span>                
              <button style={{backgroundColor: '#408080'}} className={styles.cartItemButton} onClick={() => dispatchCart({
              type: 'DECREASE', payload: cartitem
              })}>-</button> &nbsp;
              <button style={{backgroundColor: '#408080'}} className={styles.cartItemButton} onClick={() => dispatchCart({
                  type: 'INCREASE', payload: cartitem
              })}>+</button> &nbsp;
              <button className={styles.cartItemButton} onClick={() => dispatchCart({
                type: 'REMOVE_FROM_CART',payload: cartitem
              })}>remove</button>
            </div>
            <br />  
            </div>
          ))
        )
      }
      <p>Total Price : {cartItems.totalPrice.toFixed(2)}</p>
      <button className={styles.cartItemButton} onClick={() => dispatchCart({
        type: 'CLEAR_CART'
      })}>Clear Cart</button>
    </div>
  )
}

export default Cart