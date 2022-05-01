import styles from './header.module.css';
import React, {useEffect, useState} from 'react';
import logo1 from '../../img/logo.svg';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {MenuOutlined, Close, WhatsApp, Instagram, Search} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const Header = () => {
    const  [active,setActive]= useState(false)
    const [data,setData]= useState([])
    const showMenu= ()=> {
        setActive(!active)
    }
    useEffect(()=>{
            fetch("https://nephrite.herokuapp.com/api/v1/categories/")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                });
    },[])
    console.log(data);
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
                        <input className={styles.searchInput} placeholder="Поиск" />
                        <button className={styles.searchIcon}>
                        <Search   className={styles.searchIconFa}/>
                            </button> 
                            
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
                                           <li key={key}><a>{child.title}</a></li>
                                       </Link>



                                   )
                               }

                                       </ul>
                               </li>

                           )

                       }
                   {/*    <Link to='/products'>*/}
                   {/*         Цветы*/}
                   {/*    </Link>*/}
                   {/*    <ul className={styles.submenu}>*/}
                   {/*        <li><a>Декоративные</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Ритуальные</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Праздничные</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Дерево</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Листья</a></li>*/}
                   {/*    </ul>*/}
                   {/*</li>*/}
                   {/*<li>*/}
                   {/*    <Link to='/'>*/}
                   {/*         Новогодние*/}
                   {/*    </Link>*/}
                   {/*    <ul className={styles.submenu}>*/}
                   {/*        <li><a>Ёлки</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Игрушки</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Водопад</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Дождик</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Хвойные ветки</a></li>*/}
                   {/*    </ul>*/}
                   {/*</li>*/}
                   {/*<li>*/}
                   {/*    <Link to='/'>*/}
                   {/*         Летние товары*/}
                   {/*    </Link>*/}
                   {/*    <ul className={styles.submenu}>*/}
                   {/*        <li><a>Бассейн</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Болоны</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Очки</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Шапки</a></li>*/}
                   {/*       */}
                   {/*    </ul>*/}
                   {/*</li>*/}
                   {/*<li>*/}
                   {/*    <Link to='/'>*/}
                   {/*         Разное*/}
                   {/*    </Link>*/}
                   {/*    <ul className={styles.submenu}>*/}
                   {/*        <li><a>Электро-самокат</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Самокат</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Героскутер</a> </li>*/}
                   {/*        <hr/>*/}
                   {/*        <li> <a>Мячи</a></li>*/}
                   {/*        <hr/>*/}
                   {/*        <li><a>Ролики</a></li>*/}
                   {/*        <li><a>Скейтборд</a></li>*/}
                   {/*    </ul>*/}
                   {/*</li>*/}
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