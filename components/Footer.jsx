import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return(
        <div className={styles.container} >
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" objectFit="contain" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.moto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>

                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}> 
                        Electronic City,
                        <br/> Bengaluru - 99,
                        <br /> karnataka
                    </p>
                    <p className={styles.text}> 
                        Electronic City,
                        <br/> Bengaluru - 99,
                        <br /> karnataka
                    </p>
                    <p className={styles.text}> 
                        Electronic City,
                        <br/> Bengaluru - 99,
                        <br /> karnataka
                    </p>
                </div>

                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}> 
                        Monday - Friday
                        <br/> 09:00 - 22:30
                    </p>
                    <p className={styles.text}> 
                        Saturday - Sunday
                        <br/> 10:00 - 24:00
                    </p> 
                </div>
            </div>
            
        </div>
    )
}

export default Footer