import React from "react";
import styles from "./basket.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const Basket = ({id})=> {
    return (
        <button  className={styles.btn}> <FontAwesomeIcon icon={faCartShopping}  />
              <span>В корзину </span>
        </button>
    )
}
export default Basket;