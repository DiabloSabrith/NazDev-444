import React from 'react'
import styles from "./js.module.scss";
import Image from 'next/image'
import Link  from "next/link"

export  default function JsPage () {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
            
            <h1 className={styles.title}>Java script</h1>

                <ul className={styles.ul}>
                 <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
                 <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
                 <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
               </ul>
      </header>

        <article className={styles.main}>
      <h2 className={styles.h2} >Основные темы </h2>
      <div className={styles.main_TemItems}>


         <div className={styles.item}>
               <Image className={styles.img}
                 src="/img/js.jpg"
                 width={50}
                 height={50}
                 alt="Loading..."
               />
            
               <h3 className={styles.h3}>Типы данных</h3>
               <Link className={styles.a} href="/js/date">Начать </Link>
               <span className={styles.spanLow}>Новичок</span>
               <div className={styles.overlay}>
                   <ul>
                       <li>Number</li>
                       <li>BigInt</li>
                       <li>String</li>
                       <li>Undefined</li>
                       <li>Boolean</li>
                   </ul>
               </div>
         </div>
         <div className={styles.item}>
            <Image className={styles.img}
                   src="/img/js.jpg"
             width={50}
             height={50}
             alt="Loading..."
           />
           <h3  className={styles.h3}>Циклы while и for</h3>
             <Link className={styles.a} href="/js/cycle">Начать </Link>
             <span className={styles.spanLow}>Новичок</span>
             <div className={styles.overlay_right}>
                 <ul>
                     <li>Number</li>
                     <li>BigInt</li>
                     <li>String</li>
                     <li>Undefined</li>
                     <li>Boolean</li>
                 </ul>
             </div>
          </div>

         <div className={styles.item}>
            <Image className={styles.img} src="/img/js.jpg"
              width={50}
              height={50}
              alt="Loading..."
            />
            <h3  className={styles.h3}>Функции</h3>
             <Link className={styles.a} href="/js/function">Начать </Link>
             <span className={styles.spanMedium}>Продвинутый</span>
             <div className={styles.overlay}>
                 <ul>
                     <li>Number</li>
                     <li>BigInt</li>
                     <li>String</li>
                     <li>Undefined</li>
                     <li>Boolean</li>
                 </ul>
             </div>
         </div>

         <div className={styles.item}>
         <Image className={styles.img}
                src="/img/js.jpg"
             width={50}
             height={50}
             alt="Loading..."
           />
           <h3  className={styles.h3}>Работа с DOM</h3>
             <Link className={styles.a} href="/js/dom">Начать </Link>
             <span className={styles.spanMedium}>Продвинутый</span>
             <div className={styles.overlay_right}>
                 <ul>
                     <li>Number</li>
                     <li>BigInt</li>
                     <li>String</li>
                     <li>Undefined</li>
                     <li>Boolean</li>
                 </ul>
             </div>
          
         </div>
         <div className={styles.item}>
 <Image  className={styles.img}
         src="/img/js.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Классы</h3>
   <p className={styles.temporarily}>В разработке</p>
             <span className={styles.spanMedium}>Продвинутый</span>
             <div className={styles.overlay}>
                 <ul>
                     <li>Number</li>
                     <li>BigInt</li>
                     <li>String</li>
                     <li>Undefined</li>
                     <li>Boolean</li>
                 </ul>
             </div>
 </div>
 <div className={styles.item}>
 <Image className={styles.img}
        src="/img/js.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Прототипы, наследование</h3>
   <p className={styles.temporarily}>В разработке</p>
     <span className={styles.spanMedium}>Продвинутый</span>

     <div className={styles.overlay_right}>
         <ul>
             <li>Number</li>
             <li>BigInt</li>
             <li>String</li>
             <li>Undefined</li>
             <li>Boolean</li>
         </ul>
     </div>
 </div>

          <div className={styles.item}>
 <Image className={styles.img}
        src="/img/js.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Промисы, async/await</h3>
   <p className={styles.temporarily}>В разработке</p>
          <span className={styles.spanHard}>Эксперт</span>
          <div className={styles.overlay}>
              <ul>
                  <li>Number</li>
                  <li>BigInt</li>
                  <li>String</li>
                  <li>Undefined</li>
                  <li>Boolean</li>
              </ul>
          </div>
  
 </div>
 <div className={styles.item}>
 <Image className={styles.img}
        src="/img/js.jpg"

     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Свойства объектов</h3>
   <p className={styles.temporarily}>В разработке</p>
     <span className={styles.spanHard}>Эксперт</span>
     <div className={styles.overlay_right}>
         <ul>
             <li>Number</li>
             <li>BigInt</li>
             <li>String</li>
             <li>Undefined</li>
             <li>Boolean</li>
         </ul>
     </div>


 </div>

      </div>
          
        </article>
        <p className={styles.footerTitle}>NazDev corporation</p>
    </div>
  )
}


