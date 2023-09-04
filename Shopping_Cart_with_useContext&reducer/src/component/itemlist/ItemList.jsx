import { useContext } from "react";
import styles from './ItemList.module.css';
import ItemContext from "../../context/ItemContext";
import Item from '../item/Item';

const ItemList = () => {
  const {items} = useContext(ItemContext);
  
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