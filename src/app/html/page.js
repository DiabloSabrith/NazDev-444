import React from 'react'
import styles from "./html.module.scss";
import Image from "next/image"
export  default function JsPage () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
          
          <h1 className={styles.title}>HTML</h1>
              <ul className={styles.ul}>
               <li className={styles.li}><a className ={styles.a} href="/js">Java Script</a></li>
               <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
               <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
             </ul>
    </header>
      <article className={styles.main}>
        
    <h2 className={styles.h2} >Основные темы </h2>
    <div className={styles.main_TemItems}>
       <div className={styles.item}>
             <Image
                 className={styles.img}
               src="/img/html.jpg"
               width={50}
               height={50}
               alt="Loading..."
             />
             <h3 className={styles.h3}>Введение в HTML</h3>
             <p>Lorem6  </p>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Примеры</li>
                   <li>Видеоролик</li>
                   <li>Тест</li>

               </ul>
           </div>
           <div className={styles.overlay}>
               <ul>
                   <li>Что такое HTML</li>
                   <li>Структура HTML-документа</li>
                   <li>Теги </li>
                   <li>Атрибуты </li>
               </ul>
           </div>
       </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
           src="/img/html.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Ссылки</h3>
         <p>Lorem6  </p>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Примеры</li>
                   <li>Видеоролик</li>
                   <li>Тест</li>

               </ul>
           </div>
           <div className={styles.overlay}>
               <ul>
                   <li>Для чего нужно</li>
                   <li>Внешние ссылки</li>
                   <li>Якорные ссылки</li>
               </ul>
           </div>
        </div>

        <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Семантическая <br/> разметка </h3>
   <p>Lorem6  </p>
            <div className={styles.overlay_right}>
                <ul>
                    <li>Примеры</li>
                    <li>Видеоролик</li>
                    <li>Тест</li>

                </ul>
            </div>
            <div className={styles.overlay}>
                <ul>
                    <li>Header</li>
                    <li>Main</li>
                    <li>Article</li>
                    <li>Section</li>
                    <li>Footer</li>
                </ul>
            </div>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Медиа </h3>
   <p>Lorem6  </p>
      <div className={styles.overlay_right}>
          <ul>
              <li>Примеры</li>
              <li>Видеоролик</li>
              <li>Тест</li>

          </ul>
      </div>
      <div className={styles.overlay}>
          <ul>
              <li>Встраивание аудио</li>
              <li>Встраивание видео</li>
              <li>Iframe</li>
              <li>Track</li>
          </ul>
      </div>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Метаданные</h3>
   <p>Lorem6  </p>
      <div className={styles.overlay_right}>
          <ul>
              <li>Примеры</li>
              <li>Видеоролик</li>
              <li>Тест</li>

          </ul>
      </div>
      <div className={styles.overlay}>
          <ul>
              <li>Для чего нужны</li>
              <li>Meta и Head</li>
              <li>Link  и Title</li>
              <li>Style</li>
          </ul>
      </div>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Формы</h3>
   <p>Lorem6  </p>
      <div className={styles.overlay_right}>
          <ul>
              <li>Примеры</li>
              <li>Видеоролик</li>
              <li>Тест</li>

          </ul>
      </div>
      <div className={styles.overlay}>
          <ul>
              <li>Тег Form</li>
              <li>Управление формами</li>
              <li>Атрибуты</li>
          </ul>
      </div>
  </div>


    </div>
        
      </article>
        <p className={styles.footerTitle}>NazDev corporation</p>
  </div>
       
  
  )
}
    
