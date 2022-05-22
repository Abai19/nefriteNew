import styles from './header.module.css';
import React, {useEffect, useState} from 'react';
import logo1 from '../../img/logo.svg';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuOutlined, Close, WhatsApp, Instagram, Search} from "@material-ui/icons";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const MenuList = ({item, showMenu}) => {
    const [showCategory, setShowCategory] = useState(true);


    const showChild = () => {
        setShowCategory(prevState => !prevState);
    }



    return (
        <li>
            <Link to={`/category/${item.id}/${item.title}`} onClick={showMenu}>{item.title}</Link>
            <div style={{marginLeft: "8px"}} className={styles.iconBlockArrow}
                 onClick={showChild}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.svgIcon}/>
            </div>

                <ul className={showCategory ? styles.submenuForMobile2 : styles.submenuForMobile}>
                    {
                        item.children.map((child, key) =>
                            <Link to={`/category/${child.id}/${child.title}`} key={key} onClick={showMenu}>
                                <li key={key}><span
                                    style={{fontSize: "14px"}}>{child.title} </span></li>
                            </Link>
                        )
                    }

                </ul>


        </li>
    )
}


const Header = () => {
    const [data, setData] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const [active, setActive] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://nephrite-store.herokuapp.com/api/v1/categories/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            });
    }, [])

    const onChangeValue = (e) => {
        e.preventDefault();
        setInputVal(e.target.value);
    }
    const onKeyValue = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${inputVal}`)
        }
    }

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <>
            <div>
                <div className={styles.container_content}>
                    <div className={styles.iconBlock}><Link to="/"> <Instagram className={styles.instaIcon}/></Link>
                    </div>
                    <div className={styles.iconBlock}><Link to="/"> <WhatsApp className={styles.whatsIcon}/></Link>
                    </div>


                    <button className={styles.btn}> +8 771 407 480 33</button>
                </div>

                <div className={styles.containerSearch}>
                    <div className={styles.logoBlock}>
                        <Link to="/"> <img src={logo1}/> </Link>


                    </div>


                    <div className={styles.searchBlock}>
                        <div className={styles.searchBlockInside}>
                            <input className={styles.searchInput} onChange={onChangeValue} onKeyPress={onKeyValue}
                                   placeholder="Поиск"/>
                            <Link to={`/search/${inputVal}`} className={styles.searchIcon}>
                                <Search className={styles.searchIconFa}/>
                            </Link>

                        </div>
                    </div>
                    <button className={styles.shoppingCartBtn}><FontAwesomeIcon icon={faCartShopping}
                                                                                className={styles.shoppingIconFa}/>
                        0
                    </button>
                </div>
                <div className={styles.header}>
                    <div className={styles.menuIcon}>
                        <MenuOutlined onClick={showMenu} className={styles.menu}/>
                    </div>

                    <nav className={active ? `${styles.slider} ${styles.active}` : styles.slider}>

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
                                data.map((item, key) => <MenuList showMenu={showMenu} key={key} item={item}/>)
                            }
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