import  styles from './content.module.css'
import img from '../../img/img.png'
import flower from '../../img/flower.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Content = () => {
    return(
       <div className={styles.container}>
            <img src={img} className={styles.mainImg}/>

            <div className={styles.flowerWord}>
                <h3> Цветы</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p> <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500тг</span> <a href="#" > 10000тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p> <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p> <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            </div>


            <div className={styles.flowerWord}>
                <h3> Летние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p> <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p> <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            </div>
            
            
            <div className={styles.flowerWord}>
                <h3> Новогодние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p><span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            <div className={styles.flowerBlock}>
                <img src={flower}/>
                <div className={styles.flowerText}>
                <p>  <b>Пионы</b></p>
                <p> <span className={styles.oldPrice}>12500 тг</span> <a href="#" > 10000 тг</a> </p>
                <button className={styles.btn}> <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />  В корзину</button>
                </div>
                
            </div>
            </div>
       </div>
    )
}
export default Content;