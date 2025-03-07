import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

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

        <div className={styles.mainBlock}>
           <h1>NazDev <br/>Стань лучшим  <br/><span>разработчиком</span></h1>
           <h1 className={styles.fronth1}>Frontend</h1>
        </div>

        <footer className={styles.footer}>
         <div className={styles.itemfooter}><p>Java script</p></div>
         <div className={styles.itemfooter}><p>html</p></div>
         <div className={styles.itemfooter}><p>css</p></div>
         <div className={styles.itemfooter}><p>react</p></div>
        </footer>
        <p className={styles.footertitle}>NazDev corporation</p>

      </div>
    </div>
  );
}
