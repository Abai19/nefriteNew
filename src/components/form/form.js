import styles from './form.module.css'
const Form = ()=>{
    return (
        <div className={styles.main}>
            <div className={styles.mainDiv}> 
        <h2>
        Оформите заказ сейчас, и получите скидку в 10%
        </h2>
        <form>
          
            <input placeholder='Имя'/>
            <input placeholder='Номер телефона'/>
            <input placeholder='E-MAIL'/>
            <button>
                ОТПРАВИТЬ
            </button>
        </form>
        </div>
        </div>
    )
}
export default Form;