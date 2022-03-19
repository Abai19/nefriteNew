import styles from './header.module.css'
import React, {useState} from 'react'
import logo from '../../img/logo.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {MenuOutlined, Close, WhatsApp, Instagram} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const Header = () => {
    const  [active,setActive]= useState(false)
    const showMenu= ()=> {
        setActive(!active)
    }
    return (
        <>
             <div>
                <div className={styles.container_content}>
                <Instagram className={styles.instaIcon}/>
                     <WhatsApp className={styles.whatsIcon}/>
                        <button className={styles.btn}>  +8 800 849 480 33</button>
                </div>
               <tr/>
               <div className={styles.containerSearch}>
               <img src={logo} className={styles.logoBlock}/>
               <div className={styles.searchBlock}>
                    
                    <input className={styles.searchInput} placeholder="Поиск" />
                    <button className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} class={styles.searchIconFa}/>
                        </button> 
                    
                        <button className={styles.shoppingCartBtn}>    <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />
                        0
                        </button>
                </div>
              
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
                   <li>
                       <Link to='/'>
                            Цветы
                       </Link>
                       <ul className={styles.submenu}>
                           <li><a>Декоративные</a></li>
                           <hr/>
                           <li><a>Ритуальные</a> </li>
                           <hr/>
                           <li> <a>Праздничные</a> </li>
                           <hr/>
                           <li> <a>Дерево</a></li>
                           <hr/>
                           <li><a>Листья</a></li>
                       </ul>
                   </li>
                   <li>
                       <Link to='/'>
                            Новогодние
                       </Link>
                       <ul className={styles.submenu}>
                           <li><a>Ёлки</a></li>
                           <hr/>
                           <li><a>Игрушки</a> </li>
                           <hr/>
                           <li> <a>Водопад</a> </li>
                           <hr/>
                           <li> <a>Дождик</a></li>
                           <hr/>
                           <li><a>Хвойные ветки</a></li>
                       </ul>
                   </li>
                   <li>
                       <Link to='/'>
                            Летние товары
                       </Link>
                       <ul className={styles.submenu}>
                           <li><a>Бассейн</a></li>
                           <hr/>
                           <li><a>Болоны</a> </li>
                           <hr/>
                           <li> <a>Очки</a> </li>
                           <hr/>
                           <li> <a>Шапки</a></li>
                          
                       </ul>
                   </li>
                   <li>
                       <Link to='/'>
                            Разное
                       </Link>
                       <ul className={styles.submenu}>
                           <li><a>Электро-самокат</a></li>
                           <hr/>
                           <li><a>Самокат</a> </li>
                           <hr/>
                           <li> <a>Героскутер</a> </li>
                           <hr/>
                           <li> <a>Мячи</a></li>
                           <hr/>
                           <li><a>Ролики</a></li>
                           <li><a>Скейтборд</a></li>
                       </ul>
                   </li>
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