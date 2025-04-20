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
                   Циклы while и for
                        <Image className={styles.img}
                           src="/img/cycle.png"
                           width={30}
                           height={30}
                           alt='sfcsmdfs'
                        />
                   </h4>
                   <span className={styles.span}>  <span className={styles.span}>Создан не корпорацией — создан мечтой 17-летнего</span></span>
                <div className={styles.videoBlock}>
                    <WarningVideo/>
                </div>

                <div className={styles.cursItemBlock}>

                    <div className={styles.cursItem}>
                        <h3>Типы данных</h3>
                        <p>Не пройди мимо!</p>
                        <button className={styles.btn}>Начать</button>
                    </div>
                    <div className={styles.cursItem}>
                        <h3>Функции</h3>
                        <p>Просто о сложном</p>
                        <button className={styles.btn}>Начать</button>
                    </div>
                    <div className={styles.cursItem}>
                        <h3>Работа с DOM</h3>
                        <p>Почти Junior</p>
                        <button className={styles.btn}>Начать</button>
                    </div>
                </div>

            </div>
        </div>
    )
}