import React, {useEffect, useState} from "react"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";
import style from "./findProduct.module.css"
import ContentBlock from "../../components/content/contentBlock";
import styles from "../../components/content/content.module.css";

const FindProduct= ()=> {
        const [data,setData]= useState([]);
const {title}= useParams();
        useEffect(()=>{
                fetch(`https://nephrite.herokuapp.com/api/v1/products/?title=${title}`)
                    .then(data=> data.json())
                    .then(response=>setData(response))

        },[title])
        console.log(data);
        return (
            <>
               <Header/>
               <div className={style.container}>
                       <h1>Результат поиска по: <span>{title}</span></h1>
                       <div className={style.flowerMain}>

                               {data.length>1?
                                   data.map(item => {
                                               return <ContentBlock key={item.id} id={item.id} title={item.title} image={item.image} old_price={item.old_price}
                                                                    new_price={item.new_price}/>
                                       })
                               : <h3>
                                      Упс... совпадений не найдено:(
                                   </h3>
                               }
                        </div>
               </div>

               <Footer/>
            </>
        )
}
export default FindProduct