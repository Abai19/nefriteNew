import  styles from './content.module.css';
import img from '../../img/img.png';
import ContentBlock from './contentBlock';
import data from '../../data.js'

const Content = () => {
    const Flowers = data.flowers.map( item=>{
        return (
       
        <ContentBlock key={item.id} title={item.title} img={item.img} oldPrice={item.oldPrice} newPrice={item.newPrice}/>
 
        )
    })
    const summerStaff = data.flowers.map( item=>{
        return <ContentBlock key={item.id} title={item.title} img={item.img} oldPrice={item.oldPrice} newPrice={item.newPrice}/>
    })
    return(
       <div className={styles.container}>
            <img src={img} className={styles.mainImg}/>

            <div className={styles.flowerWord}>
                <h3> Цветы</h3>
            <hr/>
            </div>
         
            <div className={styles.flowerMain}>
                {Flowers}
            </div>

            <div className={styles.flowerWord}>
                <h3> Летние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
           {summerStaff}
            </div>
            
            <div className={styles.flowerWord}>
                <h3> Новогодние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
            {Flowers}
            </div>
       </div>
    )
}
export default Content;