import React from 'react'
import styles from "./page.module.scss"
import Image from "next/image"
export  default function JsPage () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
          
          <h1 className={styles.title}>CSS</h1>
              <ul className={styles.ul}>
                  
               <li className={styles.li}><a className ={styles.a} href="/js">Java script</a></li>
               <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
               <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
             </ul>
    </header>
      <article className={styles.main}>
        
    <h2 className={styles.h2} >Основные темы </h2>
    <div className={styles.main_TemItems}>
       <div className={styles.item}>
             <Image
                 className={styles.img}
               src="/img/css.jpg"
               width={50}
               height={50}
               alt="Loading..."
             />
             <h3 className={styles.h3}>Селекторы</h3>
             <p>Lorem6  </p>
       </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
           src="/img/css.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Позиционирование</h3>
         <p>Lorem6  </p>
        </div>

        <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Работа с изображениями</h3>
   <p>Lorem6  </p>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Основы адаптивного дизайна</h3>
   <p>Lorem6  </p>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Flexbox</h3>
   <p>Lorem6  </p>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Трансформации и переходы</h3>
   <p>Lorem6  </p>
  </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
            src="/img/css.jpg"
            width={50}
            height={50}
            alt="Loading..."
          />
          <h3 className={styles.h3}>Анимации</h3>
          <p>Lorem6  </p>
       </div>
       <div className={styles.item}>
       <Image
           className={styles.img}
           src="/img/css.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Препроцессоры</h3>
         <p>Lorem6</p>
        
       </div>
    </div>
        
      </article>
  </div>
  )
}

