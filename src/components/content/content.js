import  styles from './content.module.css';
import img from '../../img/img.png';
import flower from '../../img/flower.jpg';
import rose from '../../img/rose.jpg';
import hrizan from '../../img/hrizan.jpg';
import romah from '../../img/romah.png'
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
            <ContentBlock title="Пионы" img={flower}/>
            <ContentBlock title="Розы" img={rose}/>
            <ContentBlock title="Хризантемы" img={hrizan}/>
            <ContentBlock title="Ромашки" img={romah}/>
            </div>

            <div className={styles.flowerWord}>
                <h3> Летние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <ContentBlock title="Пионы" img={flower}/>
            <ContentBlock title="Розы" img={rose}/>
            <ContentBlock title="Хризантемы" img={hrizan}/>
            <ContentBlock title="Ромашки" img={romah}/>
            </div>
            
            <div className={styles.flowerWord}>
                <h3> Новогодние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            <ContentBlock title="Пионы" img={flower}/>
            <ContentBlock title="Розы" img={rose}/>
            <ContentBlock title="Хризантемы" img={hrizan}/>
            <ContentBlock title="Ромашки" img={romah}/> 
            </div>
       </div>
    )
}
export default Content;