import {Link, useParams} from "react-router-dom";
import ContentBlock from "../../components/content/contentBlock";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from './categoryList.module.css';
import photo from '../../img/pion.jpg';
import {useEffect, useState} from "react";

 const CategoryList = ()=>{
     const {id,title} = useParams();
    const [data, setData]= useState([]);
     useEffect(()=>{
         fetch(`https://nephrite.herokuapp.com/api/v1/products/by-category/${id}/`)
             .then(data=> data.json())
             .then(response=>setData(response))

     },[id]);
     // const val= data.flowers.map(item=>{
     //    return <ContentBlock key={item.id} title={item.title} img={item.img} oldPrice={item.oldPrice} newPrice={item.newPrice}/>
     //
     // })
     let someArr=[];

     for (let i = 0 ; i<3; i++){
         let someIndex= Math.floor(Math.random() * data.length);
         const item = data[someIndex];
         someArr.push(item);
     }


    console.log(data);
     return <>
            <Header/>
            <div className={styles.container}>
            <div className={styles.mainBlock}>
            <div className={styles.leftBlock}>
                <p>Популярные товары</p>
                <div>
                    {/*{*/}
                    {/*    data.map(item=>{*/}
                    {/*        return <p>{item.id}</p>*/}
                    {/*  })*/}
                    {/*  }*/}

                 <Link to="/" className={styles.leftBlockFlex}    >
                        <div>
                        <p>Пионы</p>
                        <p>70000тг</p>
                            </div>

                        <div><img src={photo} className={styles.image}/></div>

                 </Link>

                </div>
            </div>
            <div className={styles.rightBlock}>
                        <div >
                    <div className={styles.flowerWord}>
                        <h3> {title}</h3>
                    <hr/>
                    </div>

                    <div className={styles.flowerMain}>
                        {data.map(item => {
                            return <ContentBlock key={item.id} id={item.id} title={item.title} image={item.image} old_price={item.old_price}
                                                 new_price={item.new_price}/>
                        })
                        }
                    </div>

                        </div>
            </div>

            </div>
            </div>

            <Footer/>
    </>
}
export default CategoryList;
