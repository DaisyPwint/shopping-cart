import { useSelector } from 'react-redux';
import styles from './ItemList.module.css';
import Item from '../item/Item';

const ItemList = () => {
  const items = useSelector(state => state.products);
  
  return (
    <div className={styles.itemList}>
        <h1>Item List</h1>
        {
            items.map((item) => (
                <Item key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default ItemList