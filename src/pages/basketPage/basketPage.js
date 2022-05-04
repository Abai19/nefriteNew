import React, {useEffect, useState} from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";
import styles from "./basketPage.module.css";
import '../../App.css'

const  BasketPage = ()=> {
    const [data, setData]= useState([]);
    let arr= [];
    const [inputVal, setInputVal]= useState(1);
    let {id}= useParams();
    useEffect(()=>{
        fetch(`https://nephrite.herokuapp.com/api/v1/products/${id}/`)
            .then(data=> data.json())
            .then(response=> {
                setData(...data,
                    response);
            }
            )
    },[id])
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(arr));
    }, [data]);
  const onInputAction=(e)=>{
      e.preventDefault();
      setInputVal(oldState=> e.target.value);
  }
  console.log(data)
    return (
        <>
            <Header/>
            <div className="container">


            <h1>Корзина</h1>
                <div className={styles.addBlock}>
                    <h3>Вы добавили "{data.title}" в корзину</h3>
                </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Подытог</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{data.title}</td>
                            <td>{data.new_price}</td>
                            <td><input type="number" onChange={onInputAction} value={inputVal}/></td>
                            <td> {data.new_price}</td>
                        </tr>
                </tbody>
            </table>

            </div>
            <Footer/>
            </>
    )
}
export default BasketPage;