import { useContext, useRef } from 'react';
import styles from './Item.module.css';
import ItemContext from '../../context/ItemContext';

function Item({item}) {
    const {dispatchCart} = useContext(ItemContext);
    const amountRef = useRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        dispatchCart({
            type: 'ADD_TO_CART', payload: ({
                id: item.id,
                name: item.name,
                amount: +enteredAmount,
                price: item.price
            })
        })
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