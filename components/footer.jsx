import styles from "../styles/Footer.module.css"
const Footer = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>PANHCHANA CREATIVES.</h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    No. 543 , Khan Chroy Changva, Phnom Penh
                </div>
                <div className={styles.cardItem}>
                    info@panhchana.com <br/> +855 70 33 20 46
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US: <br/> _FB _IN _BE _TW
                </div>
                <div className={styles.cardItem}>
                    DEVELOPED BY PANHCHANA @2022 ROS PISEY 2022 <br/> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer