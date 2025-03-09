import React from 'react'
import styles from "./js.module.css";
import Image from 'next/image'

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
               <Image
                 src="/img/logo.jpg"
                 width={50}
                 height={50}
                 alt="Loading..."
               />
               <h3 className={styles.h3}>Типы данных</h3>
               <p>Lorem6  </p>
               <span>Новичок</span>

         </div>
         <div className={styles.item}>
            <Image
             src="/img/logo.jpg"
             width={40}
             height={40}
             alt="Loading..."
           />
           <h3  className={styles.h3}>Циклы while и for</h3>
           <p>Lorem6  </p>
          </div>

         <div className={styles.item}>
            <Image
              src="/img/logo.jpg"
              width={40}
              height={40}
              alt="Loading..."
            />
            <h3  className={styles.h3}>Функции</h3>
            <p>Lorem6  </p>
         </div>

         <div className={styles.item}>
         <Image
             src="/img/logo.jpg"
             width={40}
             height={40}
             alt="Loading..."
           />
           <h3  className={styles.h3}>Работа с DOM</h3>
           <p>Lorem6</p>
          
         </div>
         <div className={styles.item}>
 <Image
     src="/img/logo.jpg"
     width={40}
     height={40}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Классы</h3>
   <p>Lorem6</p>
  
 </div>
 <div className={styles.item}>
 <Image
     src="/img/logo.jpg"
     width={40}
     height={40}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Прототипы, наследование</h3>
   <p>Lorem6</p>
  
 </div> <div className={styles.item}>
 <Image
     src="/img/logo.jpg"
     width={40}
     height={40}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Промисы, async/await</h3>
   <p>Lorem6</p>
  
 </div>
 <div className={styles.item}>
 <Image
     src="/img/logo.jpg"
     width={40}
     height={40}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Свойства объекта, их конфигурация</h3>
   <p>Lorem6</p>
  
 </div>

      </div>
          
        </article>
    </div>
  )
}


