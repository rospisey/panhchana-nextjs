import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./circle";
const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="yellow" top="-50vh" left="-50vh"/>
      <Circle backgroundColor="green" right="-40vh"/>
      <div className={styles.card}>
        <h1 className={styles.title}>
        <span className={styles.brand}>PANHCHANA</span> WEB DEVELOPMENT
        </h1>
        <p className={styles.desc}>Develop your ideas to the world by our professional team to grow your bussiness</p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image src="/landing.jpg" height="100%" width="100%" layout="fill" objectFit="contain" alt=""/>
      </div>
    </div>
  );
};

export default Intro;
