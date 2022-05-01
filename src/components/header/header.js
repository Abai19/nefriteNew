import styles from './header.module.css';
import React, {useEffect, useState} from 'react';
import logo1 from '../../img/logo.svg';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {MenuOutlined, Close, WhatsApp, Instagram, Search} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import FindProduct from "../../pages/findProduct/findProduct";

const Header = () => {
    const  [active,setActive]= useState(false)
    const [data,setData]= useState([])
    const [inputVal, setInputVal]= useState('')
    const showMenu= ()=> {
        setActive(!active)
    }
    const onChangeValue=(e)=>{
        e.preventDefault();
        setInputVal(e.target.value);
    }
    const sendInfo=()=>{
        alert('hey');
    }

    console.log(inputVal)
    useEffect(()=>{
            fetch("https://nephrite.herokuapp.com/api/v1/categories/")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                });
    },[])
    console.log(active);
        return (
        <>
             <div>
                <div className={styles.container_content}>
                    <div className={styles.iconBlock}>  <Link to="/"> <Instagram className={styles.instaIcon}/></Link>  </div>
                    <div className={styles.iconBlock}> <Link to="/"> <WhatsApp className={styles.whatsIcon}/></Link>  </div>
            
                 
                        <button className={styles.btn}>  +8 800 849 480 33</button>
                </div>
               
               <div className={styles.containerSearch}>
                   <div className={styles.logoBlock}>
                <Link to="/">  <img src={logo1} /> </Link>
                           


                   </div>
              
               
               <div className={styles.searchBlock}> 
                    <div className={styles.searchBlockInside}>
                        <input className={styles.searchInput} onChange={onChangeValue} placeholder="Поиск" />
                        <Link to={`/search/${inputVal}`} className={styles.searchIcon} >
                        <Search   className={styles.searchIconFa}/>
                            </Link>
                            
                    </div>
                </div>
                <button className={styles.shoppingCartBtn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />
                        0
                    </button>
               </div> 
               <div className={styles.header}>
                   <div className={styles.menuIcon}>
                   <MenuOutlined onClick={showMenu} className={styles.menu}/>
                   </div>

               <nav className={active ? `${styles.slider} ${styles.active}`: styles.slider}>

                   <ul>
                   <div className={styles.closed}>
                       <Close onClick={showMenu} className={styles.close}/>
                   </div>


                   <li>
                       <Link to='/'>
                            Главная
                       </Link>
                   </li>

                       {
                           data.map((item,key)=>
                               <li key={key}>
                                <Link to={`/category/${item.id}`}> {item.title}
                               </Link>
                                   <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"8px"}} className={styles.svgIcon}/>
                                   <ul className={styles.submenu}>
                               {
                                   item.children.map((child,key)=>
                                       <Link to={`/category/${child.id}`}>
                                           <li key={key}><span style={{fontSize: "14px"}}>{child.title} </span></li>
                                       </Link>



                                   )
                               }

                                       </ul>
                               </li>

                           )

                       }

                   <li>
                       <Link to='/'>
                            Доставка
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Контакты
                       </Link>
                   </li>
                   </ul>
               </nav>
               </div>
             </div> 
            </>
    )
  }
  export default Header