'use client'
import styles from "./page.module.scss";
import Link from 'next/link' 
import Image from 'next/image' 
import  Drawer  from "../components/drawer/drawer";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <h1 className={styles.h1}>NazDev <span className={styles.span}>Lite</span></h1>

          <ul className={styles.ul}>
            <li className={styles.li}><Link className ={styles.a} href="/js">Java script</Link></li>
            <li className={styles.li}><Link className ={styles.a} href="/html">HTML</Link></li>
            <li className={styles.li}><Link className ={styles.a} href="/css">CSS</Link></li>
            <li className={styles.li}><Link className ={styles.a} href="/react">React</Link></li>
             <li className={styles.li}><Link className ={styles.a} href="/react">Поддержка</Link></li>
          </ul>
      </header>
    <Drawer/>

      <div className={styles.content}>

        <div className={styles.mainBlock}>
           <h1>NazDev <br/>Стань лучшим  <br/><span>разработчиком</span></h1>
            <div className={styles.ProjetcsBlock}>
                <h1 className={styles.frontH1}>Frontend</h1>

                <div className={styles.Projects}>
                    <div className={styles.Project_item}>
                        <p>NazDev</p>
                    </div>
                    <div className={styles.Project_item}>
                        <p>NazDev <br/> Mobile</p>
                    </div>
                    <div className={styles.Project_item}>
                        <p>NazDev <br/>Tem </p>
                    </div>

                </div>


            </div>
        </div>

        <section className={styles.infoBlock}>
            <div className={styles.infoBlock_ItemsBlock}>

                <div className={styles.Info_Item}>

                    <div className={styles.devHour_TitleOne}>
                        <p>NazDev потратил на разработку сайта<br/> (в часах)</p>
                    </div>

                    <div className={styles.devHour}></div>
                </div>

                <div className={styles.Info_Item}>

                    <div className={styles.devHour_TitleTwo}>
                        <p>Количество теории <br/> (в часах)</p>
                    </div>

                    <div className={styles.TheoryHour}></div>

                </div>

                <div className={styles.Info_Item}>

                    <div className={styles.devHour_TitleThree}>
                        <p>Количество практики <br/>( в часах)</p>
                    </div>

                    <div className={styles.PractikHour}></div>

                </div>
            </div>
        </section>

          <footer className={styles.footer}>
         <div className={styles.itemFooter}>
          <p>Java script</p>
          <button className={styles.footerBtn}><Link href="/js">
          <Image
           src="/img/next.png"
           width={30}
           height={30}
           alt="sorry"
           />
          </Link></button>
          </div>
         <div className={styles.itemFooter_Down}><p>html</p>
         <button className={styles.footerBtn}><Link href="/html">
           <Image
           src="/img/next.png"
           width={30}
           height={30}
           alt="sorry"
           />
           </Link></button></div>
         <div className={styles.itemFooter}>
          <p>css</p>
          <button className={styles.footerBtn}><Link href="/css">
          <Image
          src="/img/next.png"
          width={30}
          height={30}
          alt="sorry"
          />
          </Link></button>
          </div>
         <div className={styles.itemFooter_Down}><p>react</p>
         <button className={styles.footerBtn}><Link href="/react">
            <Image
            src="/img/next.png"
            width={30}
            height={30}
            alt="sorry"
            />
            </Link></button>
        </div>
        </footer>

      </div>

    </div>
  );
}
