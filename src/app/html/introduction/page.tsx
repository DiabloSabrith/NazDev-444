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
                Введение в HTML
                     <Image className={styles.img}
                        src="/img/html.png"
                        width={40}
                        height={40}
                        alt='sfcsmdfs'
                     />
                </h4>
                <span className={styles.span}>  Я сделал эту платформу, потому что когда-то сам искал такую. Теперь она — для тебя</span>

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