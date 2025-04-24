'use client'
import React from 'react'
import styles from "./html.module.scss";
import Image from "next/image"
import Link from "next/link";
import Drawer from '@/components/drawer/drawer';
export  default function JsPage () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
          
          <h1 className={styles.title}>HTML</h1>
              <ul className={styles.ul}>
               <li className={styles.li}><a className ={styles.a} href="/js">Java Script</a></li>
               <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
               <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
                  <li className={styles.li}><a className ={styles.a} href="/support">Поддержка</a></li>
                  <li className={styles.li}><Link className ={styles.a} href="/chat-ai">Naz AI</Link></li>
                    <li className={styles.li}><Link className ={styles.a} href="/chat-ai">NazDevLite💬</Link></li>
             </ul>
    </header>
    <Drawer/> 
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
             <h3 className={styles.h3}>Введение в HTML 	🧱</h3>
          
           <Image className={styles.spanLow}
                  src="/img/low.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Что такое HTML?</li>
                   <li>Теги, Атрибуты</li>
                   <li>Видеоролик</li>
                   <Link className={styles.a} href="/html/introduction">Начать </Link>
               </ul>
           </div>
          {/*  <div className={styles.overlay}> */}
          {/*      <ul> */}
          {/*          <li>Что такое HTML</li> */}
          {/*          <li>Структура HTML-документа</li> */}
          {/*          <li>Теги </li> */}
          {/*          <li>Атрибуты </li> */}
          {/*      </ul> */}
          {/*  </div> */}
       </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
           src="/img/html.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Ссылки 	🔗</h3>
     
           <Image className={styles.spanLow}
                  src="/img/low.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Как работают ссылки?</li>
                   <li>Какие бывают?</li>
                   <li>Видеоролик</li>
                   <Link className={styles.a} href="/html/links">Начать </Link> 
               </ul>
           </div>
          {/*  <div className={styles.overlay}> */}
          {/*      <ul> */}
          {/*          <li>Для чего нужно</li> */}
          {/*          <li>Внешние ссылки</li> */}
          {/*          <li>Якорные ссылки</li> */}
          {/*      </ul> */}
          {/*  </div> */}
        </div>

        <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Семантическая <br/> разметка 🧠</h3>
          
            <Image className={styles.spanLow}
                   src="/img/medium.png"
                   height={30}
                   width={30}
                   alt="Loading..."/>
            <div className={styles.overlay_right}>
                <ul>
                    <li>Что такое семантика?</li>
                    <li>Чем полезна?</li>
                    <li>Видеоролик</li>
                    <Link className={styles.a} href="/html/semantics">Начать </Link>
                </ul>
            </div>
           {/*  <div className={styles.overlay}> */}
           {/*      <ul> */}
           {/*          <li>Header</li> */}
           {/*          <li>Main</li> */}
           {/*          <li>Article</li> */}
           {/*          <li>Section</li> */}
           {/*          <li>Footer</li> */}
           {/*      </ul> */}
           {/*  </div> */}
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Медиа 🎥</h3>

      <Image className={styles.spanLow}
             src="/img/medium.png"
             height={30}
             width={30}
             alt="Loading..."/>
      <div className={styles.overlay_right}>
          <ul>
              <li>Работа с видео?</li>
              <li>Работа с аудио?</li>
              <li>Видеоролик</li>
              <Link className={styles.a} href="/html/media">Начать </Link>
          </ul>
      </div>
     {/*  <div className={styles.overlay}> */}
     {/*      <ul> */}
     {/*          <li>Встраивание аудио</li> */}
     {/*          <li>Встраивание видео</li> */}
     {/*          <li>Iframe</li> */}
     {/*          <li>Track</li> */}
     {/*      </ul> */}
     {/*  </div> */}
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Метаданные 🧾</h3>
      <Image className={styles.spanLow}
             src="/img/medium.png"
             height={30}
             width={30}
             alt="Loading..."/>
      <div className={styles.overlay_right}>
          <ul>
              <li> Что значит метаданные?</li>
              <li>Метаданные для соцсетей</li>
              <li>Видеоролик</li>
              <Link className={styles.a} href="/html/metadata">Начать </Link>

          </ul>
      </div>
     {/*  <div className={styles.overlay}> */}
     {/*      <ul> */}
     {/*          <li>Для чего нужны</li> */}
     {/*          <li>Meta и Head</li> */}
     {/*          <li>Link  и Title</li> */}
     {/*          <li>Style</li> */}
     {/*      </ul> */}
     {/*  </div> */}
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/html.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Формы 🧮</h3>
   
      <Image className={styles.spanLow}
             src="/img/medium.png"
             height={30}
             width={30}
             alt="Loading..."/>
      <div className={styles.overlay_right}>
          <ul>
              <li>Form, Input</li>
              <li>Label, Textarea, Select</li>
              <li>Видеоролик</li>
              <Link className={styles.a} href="/html/forms">Начать </Link>
          </ul>
      </div>
     {/*  <div className={styles.overlay}> */}
     {/*      <ul> */}
     {/*          <li>Тег Form</li> */}
     {/*          <li>Управление формами</li> */}
     {/*          <li>Атрибуты</li> */}
     {/*      </ul> */}
     {/*  </div> */}
  </div>


    </div>
        
      </article>
  </div>
       
  
  )
}
    
