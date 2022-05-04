import React from "react";
import styles from "./basket.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
const Basket = ({id})=> {
    return (
        <>

            <div className={styles.block}>


            <Link to={`/shop-card/${id}`} className={styles.btn}> <FontAwesomeIcon icon={faCartShopping}  className={styles.spanText} />
                В корзину
            </Link>
            </div>
            </>
    )
}
export default Basket;