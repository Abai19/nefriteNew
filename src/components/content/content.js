import  styles from './content.module.css';
import img from '../../img/img.png';
import ContentBlock from './contentBlock';
import {useEffect, useState} from "react";

const Content = () => {
    const [mainImg,setMainImg]= useState([]);
    const [flowers, setFlowers]= useState([]);
    const [summerStuff, setSummerStuff]= useState([]);
    const [newYearStuff, setNewYearStuff]= useState([]);


    useEffect(()=>{
        fetch("https://nephrite.herokuapp.com/api/v1/site-images/images/?type=2")
            .then(data=> data.json())
            .then(response=>setMainImg(response))

    },[])
    useEffect(()=>{
        fetch("https://nephrite.herokuapp.com/api/v1/products/by-category/1/")
            .then(data=> data.json())
            .then(response=>setFlowers(response))

    },[]);
    useEffect(()=>{
        fetch("https://nephrite.herokuapp.com/api/v1/products/by-category/16/")
            .then(data=> data.json())
            .then(response=>setSummerStuff(response))

    },[]);
    useEffect(()=>{
        fetch("https://nephrite.herokuapp.com/api/v1/products/by-category/4/")
            .then(data=> data.json())
            .then(response=>setNewYearStuff(response))

    },[]);
    return(
       <div className={styles.container}>
            <img src={`https://nephrite.herokuapp.com${mainImg.image}`} className={styles.mainImg}/>

            <div className={styles.flowerWord}>
                <h3> Цветы</h3>
            <hr/>
            </div>
         
            <div className={styles.flowerMain}>
                {flowers.map(item => {
                    return <ContentBlock key={item.id} id={item.id} title={item.title} image={item.image} old_price={item.old_price}
                                         new_price={item.new_price}/>
                })
                }
            </div>

            <div className={styles.flowerWord}>
                <h3> Летние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
                {summerStuff.map(item => {
                    return <ContentBlock key={item.id} id={item.id} title={item.title} image={item.image} old_price={item.old_price}
                                         new_price={item.new_price}/>
                })
                }
            </div>
            
            <div className={styles.flowerWord}>
                <h3> Новогодние товары</h3>
            <hr/>
            </div>

            <div className={styles.flowerMain}>
                {newYearStuff.map(item => {
                    return <ContentBlock key={item.id} id={item.id} title={item.title} image={item.image} old_price={item.old_price}
                                         new_price={item.new_price}/>
                })
                }
            </div>
       </div>
    )
}
export default Content;