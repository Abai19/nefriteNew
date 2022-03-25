import  styles from './content.module.css';
import img from '../../img/img.png';
import flower from '../../img/flower.jpg';
import rose from '../../img/rose.jpg';
import hrizan from '../../img/hrizan.jpg';
import romah from '../../img/romah.jpg'
import ContentBlock from './contentBlock';

const Content = () => {
    return(
       <div className={styles.container}>
            <img src={img} className={styles.mainImg}/>

            <div className={styles.flowerWord}>
                <h3> Цветы</h3>
            <hr/>
            </div>
         
            <div className={styles.flowerMain}>
            <ContentBlock title="Пионы" img={flower} oldPrice="23000тг" newPrice="19000тг"/>
            <ContentBlock title="Розы" img={rose} oldPrice="18000тг" newPrice="14000тг"/>
            <ContentBlock title="Хризантемы" img={hrizan} oldPrice="13000тг" newPrice="11999тг"/>
            <ContentBlock title="Ромашки" img={romah} oldPrice="14000тг" newPrice="12999тг"/>
            </div>

            <div className={styles.flowerWord}>
                <h3> Летние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <ContentBlock title="Пионы" img={flower} oldPrice="23000тг" newPrice="19000тг"/>
            <ContentBlock title="Розы" img={rose} oldPrice="18000тг" newPrice="14000тг"/>
            <ContentBlock title="Хризантемы" img={hrizan} oldPrice="13000тг" newPrice="11999тг"/>
            <ContentBlock title="Ромашки" img={romah} oldPrice="14000тг" newPrice="12999тг"/>
            </div>
            
            <div className={styles.flowerWord}>
                <h3> Новогодние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <ContentBlock title="Пионы" img={flower} oldPrice="23000тг" newPrice="19000тг"/>
            <ContentBlock title="Розы" img={rose} oldPrice="18000тг" newPrice="14000тг"/>
            <ContentBlock title="Хризантемы" img={hrizan} oldPrice="13000тг" newPrice="11999тг"/>
            <ContentBlock title="Ромашки" img={romah} oldPrice="14000тг" newPrice="12999тг"/>
            </div>
       </div>
    )
}
export default Content;