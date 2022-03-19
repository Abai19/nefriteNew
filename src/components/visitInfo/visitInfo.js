import styles from './visitInfo.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const VisitInfo = () => {
    return (
        <div className={styles.mainBlock}>
        <div className={styles.main}>
                <div className={styles.icon}>
                <FontAwesomeIcon icon={faCar} ></FontAwesomeIcon>
                </div>
                <div className={styles.info}>
                    <p>
                       БЫСТРАЯ ДОСТАВКА 
                    </p>
                    <p>
                        Доставляем до двери
                    </p>
                            
                </div>
        </div>
        <div className={styles.main}>
                <div className={styles.icon}>
                <FontAwesomeIcon icon={faSquareCheck} ></FontAwesomeIcon>
                </div>
                <div className={styles.info}>
                    <p>
                    100% ГАРАНТИЯ КАЧЕСТВА
                    </p>
                    <p>
                        Доставляем только свежие цветы
                    </p>
                            
                </div>
        </div>
        <div className={styles.main}>
                <div className={styles.icon}>
                <FontAwesomeIcon icon={faCar} ></FontAwesomeIcon>
                </div>
                <div className={styles.info}>
                    <p>
                       БЫСТРАЯ ДОСТАВКА 
                    </p>
                    <p>
                        Доставляем до двери
                    </p>
                            
                </div>
        </div>
        </div>
    )
}
export default VisitInfo;