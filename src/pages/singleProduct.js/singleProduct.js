import React, {useEffect, useState} from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";
import styles from "./singleProduct.module.css"
import {Star} from "@material-ui/icons";
import Basket from "../../components/basket/basket";
const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [counter, setCounter]= useState(1)
    const {id}= useParams();

        useEffect(()=>{
            fetch(`https://nephrite.herokuapp.com/api/v1/products/${id}/`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setProduct(data)
                });
        },[id]);

        function plus (){

            setCounter(prevState => prevState+1)
        }
    function minus (){
            if (counter>1){
                setCounter(prevState => prevState-1)
            }
    }
    return (
        <>
       <Header/>
            <div className={styles.container}>

                            <div className={styles.block}>
                                <div className={styles.leftBlock}>
                                    <img src={`https://nephrite.herokuapp.com${product.image}`}  className={styles.imageBox} alt=""/>
                                </div>

                                <div className={styles.rightBlock}>
                                    <h3>{product.title}</h3>
                                    <div className={styles.feedback}>
                                        <div>
                                            <Star /><Star/><Star/><Star/><Star/>
                                        </div>
                                        <div>
                                            <a href="#"> 0 отзывов</a>
                                        </div>
                                    </div>
                                    <div className={styles.mt}>
                                        <span className={styles.oldPrice}>{product.old_price}</span>
                                        <span className={styles.newPrice}> {product.new_price} тенге</span>
                                    </div>


                            {/*             <div>*/}


                            {/*        <div>*/}
                            {/*            <p>*/}
                            {/*                Описание:*/}
                            {/*            </p>*/}
                            {/*            <p>*/}
                            {/*                Доступность:*/}
                            {/*            </p>*/}
                            {/*            <p>*/}
                            {/*                Количество:*/}
                            {/*            </p>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <p>*/}
                            {/*                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti ea eos ipsum, pariatur quas ut voluptas. Consectetur consequuntur harum libero modi non obcaecati optio praesentium, provident quisquam voluptate voluptatibus!*!/*/}
                            {/*            </p>*/}
                            {/*            <p>*/}
                            {/*                16*/}
                            {/*            </p>*/}
                            {/*            <div className={styles.bottomBlock}>*/}
                            {/*                         <button onClick={minus} className={styles.btnCounter}>-</button>*/}
                            {/*                          <input type="text" value={counter} className={styles.inputCounter}/>*/}
                            {/*                          <button onClick={plus} className={styles.btnCounter}>+</button>*/}
                            {/*                       </div>*/}
                            {/*        </div>*/}

                            {/*</div>*/}
                                    <div className={`${styles.bottomBlock} ${styles.mt}`}>

                                        <span> Описание:</span>
                                        <div className={styles.ml}>
                                            <p>
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className={`${styles.labelBlock} ${styles.mt}`}>
                                            <span> Доступность: </span><span>13</span>
                                        </div>


                                        <div className={`${styles.bottomBlock} ${styles.mt}`}>
                                            <span>Количество:</span>
                                            <div className={`${styles.bottomBlock} ${styles.mlForBottomBlock}`}>
                                                <button onClick={minus} className={styles.btnCounter}>-</button>
                                                <input type="text" value={counter} className={styles.inputCounter}/>
                                                <button onClick={plus} className={styles.btnCounter}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.mt}>
                                        <Basket/>
                                    </div>

                                </div>

                            </div>
            </div>

            <Footer/>

        </>
            )
}
export default SingleProduct;