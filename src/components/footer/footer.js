import styles from './footer.module.css';
import kaspi from './../../img/kaspi.png';
import logo from '../../img/logo.svg';
const Footer= ()=>{
    return (
        <div className={styles.main}>
            <div className={styles.mainDivs}>
            <div>
                <p className={styles.title}>Интернет магазин Nefrite</p>
                <img src={logo} />
            </div>
            <div>
                <p className={styles.title}> Контакты:</p>
                <p className={styles.text}>Nefrite</p>
                <p className={styles.text}>Адрес: Алматы, ул. Абая 241<br/>
                Телефон:  +8 800 849 480 33<br/>
                </p>
                <p className={styles.title}>Доставка:</p>
                <p className={styles.text}>Вежливый курьер доставит ваш заказ до двери</p>
            </div>
            <div>
            <p className={styles.title}>Оплата:</p>
                <img src={kaspi} className={styles.kaspi}/>
              
            </div>
            
            </div>
            <hr/>
            <p>Copyright © All Right Reserved </p>
        </div>
    )
}
export default Footer;