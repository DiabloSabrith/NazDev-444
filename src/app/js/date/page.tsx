
'use client'
import React from 'react'
import styles from "./page.module.scss";
import Image from 'next/image'
import Modal from "@/components/modal/modal";
import Link  from "next/link"

import 'animate.css';
import IntTable from "@/components/IntaractivTable/IntTable";
import Accordion from "@/components/accordion/accordion";

export  default function JsPage () {
    return(
        <div className={styles.container}>
    <div className={styles.wrapper}>
        <div className={styles.wrapperOne_Item}>

    <div className={styles.first}>

        <div className={styles.textBlock}>
            <h2 className={styles.data_h2}>Число</h2>
            <p  className={styles.data_p}>
                Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

                Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

                Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.

                Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
            </p>

        </div>


    </div>

    <div className={styles.first}>
        <div className={styles.textBlock}>
            <h2 className={styles.data_h2}>BigInt</h2>
            <p  className={styles.data_p}>
                BigInt – это встроенный в JavaScript числовой тип данных, который предоставляет способ представления целых чисел произвольной точности. В отличие от типа Number, который имеет ограниченный диапазон представимых целых чисел (от -(2^53 - 1) до 2^53 - 1), BigInt позволяет работать с числами, превышающими эти пределы, без потери точности. Это особенно важно в криптографии, финансовых расчетах и других областях, где требуется высокая точность при работе с большими целыми числами.
            </p>
            <button   className={styles.moreBtn}><Link href="/js/date/bigint"> Подробнее</Link></button>

        </div>

    </div>
    <div className={styles.first}>
        <div className={styles.textBlock}>
            <h2 className={styles.data_h2}>Число</h2>
            <p  className={styles.data_p}>
                Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

                Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

                Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.

                Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
            </p>

        </div>
    </div>
    <div className={styles.first}>
        <div className={styles.textBlock}>
            <h2 className={styles.data_h2}>Число</h2>
            <p  className={styles.data_p}>
                Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

                Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

                Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.

                Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
            </p>

        </div>

    </div>
    <div className={styles.first}>
        <div className={styles.textBlock}>
            <h2 className={styles.data_h2}>Число</h2>
            <p  className={styles.data_p}>
                Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

                Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

                Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.

                Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
            </p>

        </div>
    </div>

        </div>
        <div className={styles.wrapperTwo_Item}>
            <h1 className={styles.data_h1}>Java Script. Типы Данных</h1>

            <div className={styles.content}>
                <div className={styles.contentOne}>
                <Image
                    className={styles.imgAuth}
                src ="/img/mainLogo.jpg"
                width={120}
                height={120}
                alt="JavaScript"
                />
                    <p className={styles.title}> NazDev</p>
                </div>
                <div className={styles.contentTwo}>

                  <div className={styles.contentTwo_Items}>
                     <div className={styles.item}>
                         <Modal/>

                     </div>
                      <div className={styles.item}><p>О нас</p></div>
                      <div className={styles.item}><p>Сообщество</p></div>
                      <div className={styles.item}><p>You Tube</p></div>
                  </div>


                </div>

            </div>
            <p className={styles.footertitle}>NazDev corporation</p>
        </div>
    </div>
        </div>
    )
}