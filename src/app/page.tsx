import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>NazDev</h1>

          <ul className={styles.ul}>
            <li className={styles.li}><a className ={styles.a} href="/js">Java script</a></li>
            <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
            <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
            <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
          </ul>
      </header>

      <div className={styles.content}>
          <h1>NazDev Стань лучшим разработчиком с нами!</h1>
      </div>



    </div>
  );
}
