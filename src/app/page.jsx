import Image from 'next/image'
import styles from './page.module.css';
import hero from "../../public/hero.png";



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. we bring together the teams from the
          global Tech industry.
        </p>
        <button className={styles.button}>See our works</button>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={hero} width={500} height={500} alt="hero section image" />
      </div>
    </div>
  );
}
