import styles from './content.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import Basket from "../basket/basket";
const ContentBlock = (props)=>{
    const [insert, setInsert] = useState([{
        id: 0,
    }]);
    const getId = (e) =>{
        e.preventDefault();
        let id = e.target.dataset.id;
        setInsert(id)

    };

    useEffect(()=>{
        localStorage.setItem('item', JSON.stringify(insert));
        setInsert(insert)
    },[insert])

    // useEffect((e)=>{
    //     e.preventDefault();
    //     let id = e.target.dataset.id;
    //     setInsert(id);
    //     localStorage.setItem('item', insert)
    // }, []);

    return (
        
        <div className={styles.flowerBlock}>
        <Link to={`/product/${props.id}`}>
        <img src={`${props.image}`}/>
        <div className={styles.flowerText}>
        <p> <b>{props.title}</b></p>
        <p> <span className={styles.oldPrice}>{props.old_price}</span> <span className={styles.newPrice} > {props.new_price}</span> </p>
        </div> 
        </Link>


            <Basket id = {props.id}/>
    </div>
   
    )
}
export default ContentBlock;