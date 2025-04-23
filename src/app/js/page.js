'use client'
import React from 'react'
import styles from "./js.module.scss";
import Image from 'next/image'
import Link  from "next/link"
import Drawer from '@/components/drawer/drawer';

export  default function JsPage () {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
            
            <h1 className={styles.title}>Java script</h1>

                <ul className={styles.ul}>
                 <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
                 <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
                 <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
                 <li className={styles.li}><a className ={styles.a} href="/support">Поддержка</a></li>
                 <li className={styles.li}><Link className ={styles.a} href="/chat-ai">Naz AI</Link></li>              
                  </ul>
      </header>
    <Drawer/>
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
            
               <h3 className={styles.h3}>Типы данных 📦</h3>

               <Image className={styles.spanLow}
               src="/img/low.png"
               height={30}
               width={30}
               alt="Loading..."/>

             <div className={styles.overlay_right}>
                 <ul>
                     <li>String, Number</li>
                     <li>Boolean, Array </li>
                     <li>Undefined, Null</li>
                     <Link className={styles.a} href="/js/bigint">Начать </Link>

                 </ul>
             </div>


             {/* TODO */}
           {/*   <div className={styles.overlay}> */}
           {/*       <ul> */}
           {/*           <li>Переменные</li> */}
           {/*           <li>Функции</li> */}
           {/*           <li>Наследование</li> */}
           {/*           <li>Миксины</li> */}
           {/*           <li>Sass,Less</li> */}
           {/*       </ul> */}
           {/*   </div> */}
         </div>
         <div className={styles.item}>
            <Image className={styles.img}
                   src="/img/js.jpg"
             width={50}
             height={50}
             alt="Loading..."
           />
           <h3  className={styles.h3}>Циклы while и for 🔁</h3>
           
             <Image className={styles.spanLow}
                    src="/img/low.png"
                    height={30}
                    width={30}
                    alt="Loading..."/>
             <div className={styles.overlay_right}>
                 <ul>
                     <li>While, For</li>
                     <li>Примеры</li>
                     <li>Видеоролик</li>
                     <Link className={styles.a} href="/js/cycle">Начать </Link>

                 </ul>
             </div>
           {/*   <div className={styles.overlay}> */}
           {/*       <ul> */}
           {/*           <li>Переменные</li> */}
           {/*           <li>Функции</li> */}
           {/*           <li>Наследование</li> */}
           {/*           <li>Миксины</li> */}
           {/*           <li>Sass,Less</li> */}
           {/*       </ul> */}
           {/*   </div> */}
          </div>

         <div className={styles.item}>
            <Image className={styles.img} src="/img/js.jpg"
              width={50}
              height={50}
              alt="Loading..."
            />
            <h3  className={styles.h3}>Функции 🔧</h3>
           
             <Image className={styles.spanLow}
                    src="/img/medium.png"
                    height={30}
                    width={30}
                    alt="Loading..."/>
             <div className={styles.overlay_right}>
                <ul>
                    <li>Что такое функция?</li>
                    <li>Аргументы, Параметры </li>
                    <li>Видеоролик</li>
                    <Link className={styles.a} href="/js/cycle">Начать </Link>
                </ul>
            </div>
            {/*  <div className={styles.overlay}> */}
            {/*      <ul> */}
            {/*          <li>Переменные</li> */}
            {/*          <li>Функции</li> */}
            {/*          <li>Наследование</li> */}
            {/*          <li>Миксины</li> */}
            {/*          <li>Sass,Less</li> */}
            {/*      </ul> */}
            {/*  </div> */}
         </div>

         <div className={styles.item}>
         <Image className={styles.img}
                src="/img/js.jpg"
             width={50}
             height={50}
             alt="Loading..."
           />
           <h3  className={styles.h3}>Работа с DOM 🕸️</h3>
         
             <Image className={styles.spanLow}
                    src="/img/medium.png"
                    height={30}
                    width={30}
                    alt="Loading..."/>
             <div className={styles.overlay_right}>
                 <ul>
                     <li>Что такое DOM? </li>
                     <li>Как работать с DOM?</li>
                     <li>Видеоролик</li>
                     <Link className={styles.a} href="/js/dom">Начать </Link>
                 </ul>
             </div>
            {/*  <div className={styles.overlay}> */}
            {/*      <ul> */}
            {/*          <li>Переменные</li> */}
            {/*          <li>Функции</li> */}
            {/*          <li>Наследование</li> */}
            {/*          <li>Миксины</li> */}
            {/*          <li>Sass,Less</li> */}
            {/*      </ul> */}
            {/*  </div> */}
          
         </div>
         <div className={styles.item}>
 <Image  className={styles.img}
         src="/img/js.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Классы 🏗️</h3>
   <p className={styles.temporarily}>В разработке</p>
             <Image className={styles.spanLow}
                    src="/img/medium.png"
                    height={30}
                    width={30}
                    alt="Loading..."/>
             <div className={styles.overlay_right}>
                 <ul>
                     <li>Что такое классы?</li>
                     <li>Кострукторы</li>
                     <li>Видеоролик</li>
                     <li>Super</li>
                     <Link className={styles.dev_Mode} href="#">Скоро </Link>
                 </ul>
             </div>
            {/*  <div className={styles.overlay}> */}
            {/*      <ul> */}
            {/*          <li>Переменные</li> */}
            {/*          <li>Функции</li> */}
            {/*          <li>Наследование</li> */}
            {/*          <li>Миксины</li> */}
            {/*          <li>Sass,Less</li> */}
            {/*      </ul> */}
            {/*  </div> */}
 </div>
 <div className={styles.item}>
 <Image className={styles.img}
        src="/img/js.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}> Прототипы 🧬 </h3>
   <p className={styles.temporarily}>В разработке</p>
     <Image className={styles.spanLow}
            src="/img/medium.png"
            height={30}
            width={30}
            alt="Loading..."/>


     <div className={styles.overlay_right}>
      <ul>
          <li>Что такое прототипы?</li>
          <li>Прототипное наследование</li>
          <li>Видеоролик</li>
          <Link className={styles.dev_Mode} href="#">Скоро </Link>
      </ul>

  </div>
    {/*  <div className={styles.overlay}> */}
    {/*      <ul> */}
    {/*          <li>Переменные</li> */}
    {/*          <li>Функции</li> */}
    {/*          <li>Наследование</li> */}
    {/*          <li>Миксины</li> */}
    {/*          <li>Sass,Less</li> */}
    {/*      </ul> */}
    {/*  </div> */}
 </div>

          <div className={styles.item}>
 <Image className={styles.img}
        src="/img/js.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Async/Await ⏳</h3>
   <p className={styles.temporarily}>В разработке</p>
              <Image className={styles.spanLow}
                     src="/img/hard.png"
                     height={30}
                     width={30}
                     alt="Loading..."/>

       <div className={styles.overlay_right}>
             <ul>
                 <li>Что такое промисы?</li>
                 <li>async, await</li>
                 <li>Видеоролик</li>
               
                 <Link className={styles.dev_Mode} href="#">Скоро </Link>
             </ul>
         </div>
             {/*  <div className={styles.overlay}> */}
             {/*      <ul> */}
             {/*          <li>Переменные</li> */}
             {/*          <li>Функции</li> */}
             {/*          <li>Наследование</li> */}
             {/*          <li>Миксины</li> */}
             {/*          <li>Sass,Less</li> */}
             {/*      </ul> */}
             {/*  </div> */}

  
 </div>
 <div className={styles.item}>
 <Image className={styles.img}
        src="/img/js.jpg"

     width={50}
     height={50}
     alt="Loading..."
   />
   <h3  className={styles.h3}>Свойства объектов 📋  </h3>
   <p className={styles.temporarily}>В разработке</p>
     <Image className={styles.spanLow}
            src="/img/hard.png"
            height={30}
            width={30}
            alt="Loading..."/>
          <div className={styles.overlay_right}>
       <ul>
           <li>Что такое классы?</li>
           <li>Кострукторы</li>
           <li>Видеоролик</li>
           <li>Super</li>
           <Link className={styles.dev_Mode} href="#">Скоро </Link>
       </ul>
   </div>
    {/*  <div className={styles.overlay}> */}
    {/*      <ul> */}
    {/*          <li>Переменные</li> */}
    {/*          <li>Функции</li> */}
    {/*          <li>Наследование</li> */}
    {/*          <li>Миксины</li> */}
    {/*          <li>Sass,Less</li> */}
    {/*      </ul> */}
    {/*  </div> */}


 </div>
 

      </div>
          
        </article>
      
    </div>
  )
}


