import { useRef } from 'react';
import styles from './Item.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';

function Item({item}) {
    const dispatch = useDispatch();
    const amountRef = useRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            amount: +enteredAmount,
            price: item.price
        }))
    }
    
    return (
        <div className={styles.item}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>{item.price} $</span>            
            <form onSubmit={handleFormSubmit}>
                Amount <input type="number" min="1" max="5" defaultValue="1" ref={amountRef}/> &nbsp;
                <button type="submit" className={styles.itemButton}>Add to Cart</button>
            </form>
        </div>
    )
}

export default Item;