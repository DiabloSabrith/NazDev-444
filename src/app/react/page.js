import React from 'react'
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link";
export  default function JsPage () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
          
          <h1 className={styles.title}>React</h1>
              <ul className={styles.ul}>
                  
               <li className={styles.li}><a className ={styles.a} href="/js">Java script</a></li>
               <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
               <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
                  <li className={styles.li}><a className ={styles.a} href="/support">Поддержка</a></li>
             </ul>
    </header>
      <article className={styles.main}>
        
    <h2 className={styles.h2} >Основные темы </h2>
    <div className={styles.main_TemItems}>
       <div className={styles.item}>
             <Image
                 className={styles.img}
               src="/img/react.jpg"
               width={50}
               height={50}
               alt="Loading..."
             />
             <h3 className={styles.h3}>Введение в React </h3>
           <Link className={styles.a} href="/js/cycle">Начать </Link>
           <Image className={styles.spanLow}
                  src="/img/low.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Примеры</li>
                   <li>Видеоролик</li>
                   <li>Тест</li>

               </ul>
           </div>
           <div className={styles.overlay}>
               <ul>
                   <li>Что такое React</li>
                   <li>Преимущества React</li>
                   <li>Установка  </li>
                   <li>Настройка</li>
               </ul>
           </div>
       </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
           src="/img/react.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Основы JSX </h3>
           <Link className={styles.a} href="/js/cycle">Начать </Link>
           <Image className={styles.spanLow}
                  src="/img/low.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Примеры</li>
                   <li>Видеоролик</li>

               </ul>
           </div>
           <div className={styles.overlay}>
               <ul>
                   <li>Что такое JSX</li>
                   <li>camelCase</li>
               </ul>
           </div>
        </div>
        <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/react.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Компоненты</h3>
            <Link className={styles.a} href="/js/cycle">Начать </Link>
            <Image className={styles.spanLow}
                   src="/img/medium.png"
                   height={30}
                   width={30}
                   alt="Loading..."/>
            <div className={styles.overlay_right}>
                <ul>
                    <li>Примеры</li>
                    <li>Видеоролик</li>

                </ul>
            </div>
            <div className={styles.overlay}>
                <ul>
                    <li>Компонент</li>
                    <li>Типы компонентов</li>
                    <li>Props </li>
                </ul>
            </div>
   </div>
   <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/react.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>State</h3>
       <Link className={styles.a} href="/js/cycle">Начать </Link>
       <Image className={styles.spanLow}
              src="/img/medium.png"
              height={30}
              width={30}
              alt="Loading..."/>
       <div className={styles.overlay_right}>
           <ul>
               <li>Примеры</li>
               <li>Видеоролик</li>

           </ul>
       </div>
       <div className={styles.overlay}>
           <ul>
               <li>Что такое state</li>
               <li>Хук useState</li>
               <li>Props </li>
           </ul>
       </div>
   </div>
   <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/react.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Обработка событий</h3>
       <Link className={styles.a} href="/js/cycle">Начать </Link>
       <Image className={styles.spanLow}
              src="/img/hard.png"
              height={30}
              width={30}
              alt="Loading..."/>
       <div className={styles.overlay_right}>
           <ul>
               <li>Примеры</li>
               <li>Видеоролик</li>
               <li>Тест</li>

           </ul>
       </div>
       <div className={styles.overlay}>
           <ul>
               <li>onClick</li>
               <li>onChange</li>
               <li>onSubmit </li>
           </ul>
       </div>
   </div>
   <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/react.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Routing</h3>
       <Link className={styles.a} href="/js/cycle">Начать </Link>
       <Image className={styles.spanLow}
              src="/img/hard.png"
              height={30}
              width={30}
              alt="Loading..."/>
       <div className={styles.overlay_right}>
           <ul>
               <li>Примеры</li>
               <li>Видеоролик</li>
               <li>Тест</li>

           </ul>
       </div>
       <div className={styles.overlay}>
           <ul>
               <li>Что такое роутинг</li>
               <li>React Router </li>
               <li>Link</li>
           </ul>
       </div>
   </div>

    </div>
        
      </article>
        <p className={styles.footerTitle}>NazDev corporation</p>
   </div>
  )
}

