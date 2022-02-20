import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./circle";
const Intro = () => {
  return (
    // <div className={styles.container}>
    //   <Circle backgroundColor="yellow" top="-45vh" left="-45vh"/>
    //   <Circle backgroundColor="green" right="-40vh"/>
    //   <div className={styles.card}>
    //     <h1 className={styles.title}>
    //     <span className={styles.brand}>PANHCHANA</span> WEB DEVELOPMENT
    //     </h1>
    //     <p className={styles.desc}>Develop your ideas to the world by our professional team to grow your bussiness</p>
    //     <button className={styles.button}>DISCOVER</button>
    //   </div>
    //   <div className={styles.card}>
    //     <Image src="/landing.jpg" height="100%" width="100%" layout="fill" objectFit="contain" alt=""/>
    //   </div>
    // </div>

    <div className="relative flex flex-col md:flex-row">
        <div className="w-1/2 p-24 h-[calc(100vh-50px)] flex-none md:flex-1 justify-between relative overflow-hidden">
            <h1 className={styles.title}>
        <span className="text-green-500">PANHCHANA</span> WEB DEVELOPMENT
       </h1>
        <p className="text-xl">Develop your ideas to the world by</p>
         <button className="bg-transparent hover:bg-indigo-500 hover:text-white py-2 px-4 my-3 border border-blue-500 hover:border-transparent rounded">DISCOVER</button>
        </div>
        <div className="w-1/2 h-[calc(100vh-50px)] p-24 flex-1 justify-between relative" >
             <Image src="/landing.jpg" height="100%" width="100%" layout="fill" objectFit="contain" alt=""/>
    
        </div>
    </div>
  );
};

export default Intro;
