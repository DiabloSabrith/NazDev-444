'use client'
import React, {useState,useEffect} from 'react'
import styles from "./page.module.scss";
import Link  from "next/link"
import Image  from "next/image"
import 'animate.css';
import WarningVideo from "@/components/warningVideo/warningVideo";



export  default function JsPage () {

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}> 

                <h4 >
                Трансформации и переходы
                     <Image className={styles.img}
                        src="/img/transform.png"
                        width={30}
                        height={30}
                        alt='sfcsmdfs'
                     />
                </h4>
                <span className={styles.span}>Я не знал, получится ли. Но знал одно — кто-то точно в этом нуждается</span>
                <button className={styles.back_btn}><Link href="/">❮❮</Link></button>
                <div className={styles.videoBlock}>
                    <WarningVideo/>
                </div>

                <div className={styles.cursItemBlock}>

                    <div className={styles.cursItem}>
                        <h3>Циклы while и for</h3>
                        <p>Не пройди мимо!</p>
                        <button className={styles.btn}><Link href="/js/cycle">Начать</Link></button>
                    </div>
                    <div className={styles.cursItem}>
                        <h3>Функции</h3>
                        <p>Просто о сложном</p>
                        <button className={styles.btn}><Link href="/js/function">Начать</Link></button>
                    </div>
                    <div className={styles.cursItem}>
                        <h3>Работа с DOM</h3>
                        <p>Почти Junior</p>
                        <button className={styles.btn}><Link href="/js/dom">Начать</Link></button>
                    </div>
                </div>

            </div>
        </div>
    )
}