import { Link } from "react-router-dom";
import ContentBlock from "../../components/content/contentBlock";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import data from '../../data.js';
import styles from './productsList.module.css';
import photo from '../../img/pion.jpg';

 const ProductsList = ()=>{
     const val= data.flowers.map(item=>{
        return <ContentBlock key={item.id} title={item.title} img={item.img} oldPrice={item.oldPrice} newPrice={item.newPrice}/>

     })
    return (
        <>
                <Header/>
                <div className={styles.container}>
                <div className={styles.mainBlock}>
                <div className={styles.leftBlock}>
                    <p>Популярные товары</p>
                    <div>
                     <Link to="/" className={styles.leftBlockFlex}    >
                            <div>
                            <p>1001 роза</p>
                            <p>70000тг</p>
                                </div>
                                
                            <div><img src={photo} className={styles.image}/></div>
                        
                            </Link>
                       
                    </div>
                </div>
                <div className={styles.rightBlock}>
                            <div >
                        <div className={styles.flowerWord}>
                            <h3> Цветы</h3>
                        <hr/>
                        </div>
                    
                        <div className={styles.flowerMain}>
                            {val}
                        </div>

                            </div>
                </div>

                </div>
                </div>
          
                <Footer/>
        </>
    
    )
}
export default ProductsList;
