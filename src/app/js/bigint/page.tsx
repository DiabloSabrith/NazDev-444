'use client'
import React, {useState,useEffect} from 'react'
import styles from "./page.module.scss";
import Image from 'next/image'


import Link  from "next/link"
import 'animate.css';
import WarningVideo from "@/components/warningVideo/warningVideo";
import IntTable from "@/components/IntaractivTable/IntTable";
import Accordion from "@/components/accordion/accordion";

export  default function JsPage () {

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                    <div className={styles.content}>

            

                    <p>Пример на СodePen</p>
                    <button className={styles.codePenBtn}>Посмотреть примеер    </button>

            

                            <div className={styles.codePen}>

                                <iframe className={styles.codPen}

                                        height="300"
                                        style={{ width: '80%' }} /* Используем объект стилей */
                                        scrolling="no"
                                        title="Basic HTML, CSS, and JavaScript"
                                        src="https://codepen.io/Diablo-Sabrith/embed/qEBppOw?default-tab=js%2Cresult"
                                        frameBorder="no"
                                        loading="lazy"

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
                           <p>
                           В JavaScript стандартный тип данных Number имеет ограничение на максимальное значение, которое он может безопасно представлять. Это может стать проблемой при работе с большими числами  
                           Именно здесь на помощь приходит тип данных BigInt. BigInt позволяет представлять целые числа произвольной длины. Он был добавлен в JavaScript (ES2020) для решения проблемы точности при работе с числами, выходящими за пределы
                              </p>
                       </div>


                       <div className={styles.infoContent_Two}>
                           <div className={styles.itemOne}>
                               <Image className={styles.img}
                                      src="/img/js.jpg"
                                      width={240}
                                      height={240}
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
                    <WarningVideo/>
                </div>
            </div>
        </div>
    )
}