'use client'
import React, {useState,useEffect} from 'react'
import styles from "./page.module.scss";
import Image from 'next/image'
import Link  from "next/link"
import 'animate.css';
import IntTable from "@/components/IntaractivTable/IntTable";
import Accordion from "@/components/accordion/accordion";

export  default function JsPage () {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <p>Пример на СodePen</p>

                            <div className={styles.codePen}>

                                <iframe className={styles.codPen}

                                        height="300"
                                        style={{ width: '80%' }} /* Используем объект стилей */
                                        scrolling="no"
                                        title="Basic HTML, CSS, and JavaScript"
                                        src="https://codepen.io/Diablo-Sabrith/embed/qEBppOw?default-tab=js%2Cresult"
                                        frameBorder="no"
                                        loading="lazy"
                                        allowTransparency="true"
                                        allowFullScreen="true"
                                >
                                    See the Pen{' '}
                                    <a href="https://codepen.io/Diablo-Sabrith/pen/qEBppOw">
                                        Basic HTML, CSS, and JavaScript
                                    </a>{' '}
                                    by Diablo-Sabrith (<a href="https://codepen.io/Diablo-Sabrith">@Diablo-Sabrith</a>) on{' '}
                                    <a href="https://codepen.io">CodePen</a>.
                                </iframe>
                            </div>
                    </div>
                <div className={styles.textBlock}>
                   <div className={styles.infoContent}>


                       <div  className={styles.infoContent_One} >
                           <p>В JavaScript тип number не может безопасно работать с числами, большими, чем (253-1) (т. е. 9007199254740991) или меньшими, чем -(253-1) для отрицательных чисел.

                               Если говорить совсем точно, то, технически, тип number может хранить большие целые числа (до 1.7976931348623157 * 10308), но за пределами безопасного диапазона целых чисел ±(253-1) будет ошибка точности, так как не все цифры помещаются в фиксированную 64-битную память. Поэтому можно хранить «приблизительное» значение.</p>
                       </div>


                       <div className={styles.infoContent_Two}>
                           <div className={styles.itemOne}>
                               <Image className={styles.img}
                                      src="/img/js.jpg"
                                      width={220}
                                      height={220}
                                      alt="Loading..."
                               />
                           </div>
                           <div className={styles.itemTwo}>
                               <button className={styles.backBtn}>Назад</button>
                               <button className={styles.nextBtn}>Далее</button>
                           </div>
                       </div>
                   </div>
                </div>
                <div className={styles.videoBlock}>

                    <iframe width="1000" height="500" src="https://www.youtube.com/embed/-R_anA8X_v0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>

                    </iframe>
                </div>
            </div>
        </div>
    )
}