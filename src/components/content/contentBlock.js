import styles from './content.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const ContentBlock = (props)=>{
    return (
        <div className={styles.flowerBlock}>
        <img src={props.img}/>
        <div className={styles.flowerText}>
        <p> <b>{props.title}</b></p>
        <p> <span className={styles.oldPrice}>{props.oldPrice}</span> <a href="#" > {props.newPrice}</a> </p>
        <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                className={styles.shoppingIconFa} />  В корзину</button>
        </div>
        
    </div>
    )
}
export default ContentBlock;