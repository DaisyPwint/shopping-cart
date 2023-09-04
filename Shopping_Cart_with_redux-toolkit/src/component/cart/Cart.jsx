import { useSelector,useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import { clearCart, decrease, increase, removeFromCart } from '../../slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

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
                <button style={{backgroundColor: '#408080'}} className={styles.cartItemButton} onClick={() => dispatch(decrease(cartitem))}>-</button> &nbsp;
                <button style={{backgroundColor: '#408080'}} className={styles.cartItemButton} onClick={() => dispatch(increase(cartitem))}>+</button> &nbsp;
                <button className={styles.cartItemButton} onClick={() => dispatch(removeFromCart(cartitem))}>remove</button>
            </div>
            <br />  
            </div>
          ))
        )
      }
      <p>Total Price : {cartItems.totalPrice.toFixed(2)}</p>
      <button className={styles.cartItemButton} style={{width: '80%'}} onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart