import React from 'react'
import Image from "next/image"
import Link from "next/link";
import styles from "./page.module.scss"
export  default function JsPage () {
    return(
        <div className={styles.container}>
    <div className={styles.wrapper}>

        <div className={styles.main}>

            <ul className={styles.ul}>
                <li className={styles.li}><a className ={styles.a} href="/js">Java script</a></li>
                <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
                <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
                <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
            </ul>
            <section>
                    <div className={styles.sectionTextBlock}>
                        <h1>NazDev<br/>Поддержка</h1>
                        <p>Добро пожаловать в раздел поддержки NazDev! Мы стремимся сделать ваше обучение максимально комфортным и эффективным. Наша команда всегда готова помочь вам на каждом этапе вашего образовательного пути.</p>
            <button><Link href="/">На главную</Link></button>
                    </div>
            </section>
        </div>

        <div className={styles.article}>

            <div className={styles.articleItem}>
                <ul>
                    <li> <Link  className={styles.a} href="#">Как мне начать обучение? </Link></li>
                    <li> <Link  className={styles.a} href="#">Сколько стоят курсы? </Link> </li>
                    <li> <Link  className={styles.a} href="#">В каком порядке лучше проходить курсы? </Link></li>
                    <li> <Link  className={styles.a} href="#">Будут ли добавляться новые курсы?  </Link></li>
                    <li> <Link  className={styles.a} href="#">Какой уровень сложности курсов? </Link></li>
                </ul>
            </div>
            <div className={styles.articleItem}>
                <ul>
                    <li> <Link  className={styles.a} href="#">Что делать, если видео не воспроизводится? </Link></li>
                    <li> <Link  className={styles.a} href="#">Работает ли сайт на мобильных устройствах?  </Link></li>
                    <li> <Link  className={styles.a} href="#">Как задать вопрос по материалу курса? </Link></li>
                    <li> <Link  className={styles.a} href="#">Где найти дополнительные материалы к курсу? </Link> </li>
                    <li> <Link  className={styles.a} href="#">Предоставляются ли сертификаты об окончании курсов? </Link></li>
                </ul>
            </div>
            <div className={styles.articleItem}>
                <ul>
                    <li> <Link  className={styles.a} href="#">Можно ли получить помощь от других студентов?  </Link></li>
                    <li> <Link  className={styles.a} href="#">Есть ли домашние задания?  </Link></li>
                    <li> <Link  className={styles.a} href="#">Что делать, если я не понимаю материал?   </Link></li>
                    <li> <Link  className={styles.a} href="#">Можно ли использовать код из курсов в своих проектах?   </Link></li>
                    <li> <Link  className={styles.a} href="#">Что делать, если я нашел неточность в материале курса? </Link> </li>
                </ul>
            </div>
            <div className={styles.articleItem}>
                <ul>
                    <li><Link  className={styles.a} href="#">Как получить обратную связь по своим проектам? </Link></li>
                    <li> <Link  className={styles.a} href="#">Как я могу поддержать проект?</Link></li>
                    <li> <Link  className={styles.a} href="#">Как стать спонсором проекта?</Link></li>
                    <li> <Link  className={styles.a} href="#">Какие авторские права на материалы курсов? </Link></li>
                    <li> <Link  className={styles.a} href="#">Могу ли я помочь проекту, создавая новые курсы? </Link></li>
                </ul>
            </div>

        </div>
    </div>
        </div>
    )
}