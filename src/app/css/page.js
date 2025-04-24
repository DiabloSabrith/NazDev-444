'use client'
import React from 'react'
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link";
import Drawer from '@/components/drawer/drawer';
export  default function JsPage () {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
          
          <h1 className={styles.title}>CSS</h1>
              <ul className={styles.ul}>
                  
               <li className={styles.li}><a className ={styles.a} href="/js">Java script</a></li>
               <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
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
               src="/img/css.jpg"
               width={50}
               height={50}
               alt="Loading..."
             />
             <h3 className={styles.h3}>Селекторы 🎯</h3>
           <Image className={styles.spanLow}
                  src="/img/low.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>

           <div className={styles.overlay_right}>
               <ul>
                   <li>Введение в CSS</li>
                   <li>Селекторы элементов</li>
                   <li>Псевдоклассы</li>
                   <li>Видеоролик</li>
           <Link className={styles.a} href="/css/selectors">Начать </Link>

               </ul>
           </div>
          {/*  <div className={styles.overlay}> */}
          {/*      <ul> */}
          {/*          <li>Введение в CSS</li> */}
          {/*          <li>Селекторы элементов</li> */}
          {/*          <li>Селекторы классов</li> */}
          {/*          <li>Псевдоклассы</li> */}
          {/*          <li>Псевдоэлементы</li> */}
          {/*      </ul> */}
          {/*  </div> */}

       </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
           src="/img/css.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Позиционирование	📐</h3>
           <Image className={styles.spanLow}
                  src="/img/low.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Position-fixed</li>
                   <li>Position-static</li>
                   <li>Position-absolute</li>
                   <li>Видеоролик</li>
           <Link className={styles.a} href="/css/positions">Начать </Link>

               </ul>
           </div>
          {/*  <div className={styles.overlay}> */}
          {/*      <ul> */}
          {/*          <li>Position-fixed</li> */}
          {/*          <li>Position-static</li> */}
          {/*          <li>Position-absolute</li> */}
          {/*          <li>z-index</li> */}

          {/*      </ul> */}
          {/*  </div> */}
        </div>

        <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Работа <br/>с изображениями 🖼️</h3>
            <Image className={styles.spanLow}
                   src="/img/medium.png"
                   height={30}
                   width={30}
                   alt="Loading..."/>
            <div className={styles.overlay_right}>
                <ul>
                    <li>Backround-image</li>
                    <li>Object-fit</li>
                    <li>Picture</li>
                    <li>Видеоролик</li>
            <Link className={styles.a} href="/css/imges">Начать </Link>

                </ul>
            </div>
           {/*  <div className={styles.overlay}> */}
           {/*      <ul> */}
           {/*          <li>Backround-image</li> */}
           {/*          <li>Object-fit</li> */}
           {/*          <li>Picture</li> */}

           {/*      </ul> */}
           {/*  </div> */}
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Основы адаптивного дизайна 📱</h3>
      <div className={styles.overlay_right}>
          <ul>
              <li>Медиа-запросы </li>
              <li>Типографика</li>
              <li>Видеоролик</li>
      <Link className={styles.a} href="/css/adaptivs"> Начать </Link>

          </ul>
      </div>
    {/*   <div className={styles.overlay}> */}
    {/*       <ul> */}
    {/*           <li>Медиа-запросы </li> */}
    {/*           <li>Mobile-First </li> */}
    {/*           <li>Desktop-First </li> */}
    {/*           <li>Типографика</li> */}
    {/*       </ul> */}
    {/*   </div> */}
      <Image className={styles.spanLow}
             src="/img/medium.png"
             height={30}
             width={30}
             alt="Loading..."/>
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />


   <h3 className={styles.h3}>Flexbox ↔️</h3>
      <Image className={styles.spanLow}
             src="/img/medium.png"
             height={30}
             width={30}
             alt="Loading..."/>
      <div className={styles.overlay_right}>
          <ul>
              <li>Display-flex</li>
              <li>Display-grid</li>
              <li>Видеоролик</li>
      <Link className={styles.a} href="/css/flex">Начать </Link>

          </ul>
      </div>
   {/*    <div className={styles.overlay}> */}
   {/*        <ul> */}
   {/*            <li>display-flex</li> */}
   {/*            <li>gap</li> */}
   {/*            <li>display-grid</li> */}
   {/*            <li>align-content</li> */}
   {/*        </ul> */}
   {/*    </div> */}
  </div>
  <div className={styles.item}>
    <Image
        className={styles.img}
     src="/img/css.jpg"
     width={50}
     height={50}
     alt="Loading..."
   />
   <h3 className={styles.h3}>Трансформации <br/>и переходы 🌈</h3>
      <Image className={styles.spanLow}
             src="/img/medium.png"
             height={30}
             width={30}
             alt="Loading..."/>
      <div className={styles.overlay_right}>
          <ul>
              <li>Transform</li>
              <li>Scale, Rotate</li>
              <li>Skew, Matrtix</li>
              <li>Видеоролик</li>
      <Link className={styles.a} href="/css/transforms">Начать </Link>

          </ul>
      </div>
    {/*   <div className={styles.overlay}> */}
    {/*       <ul> */}
    {/*           <li>Transform</li> */}
    {/*           <li>Scale</li> */}
    {/*           <li>Rotate</li> */}
    {/*           <li>Skew</li> */}
    {/*           <li>Matrix</li> */}
    {/*       </ul> */}
    {/*   </div> */}

  </div>
       <div className={styles.item}>
          <Image
              className={styles.img}
            src="/img/css.jpg"
            width={50}
            height={50}
            alt="Loading..."
          />
          <h3 className={styles.h3}>Анимации ✨</h3>
           <Image className={styles.spanLow}
                  src="/img/medium.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>@Keyframes</li>
                   <li>Animation-play-state</li>
                   <li>Animation-delay</li>
                   <li>Видеоролик</li>
           <Link className={styles.a} href="/css/animation">Начать </Link>

               </ul>
           </div>
          {/*  <div className={styles.overlay}> */}
          {/*      <ul> */}
          {/*          <li>@keyframes</li> */}
          {/*          <li>animation-name</li> */}
          {/*          <li>animation-play-state</li> */}
          {/*          <li>animation-delay</li> */}

          {/*      </ul> */}
          {/*  </div> */}
       </div>
       <div className={styles.item}>
       <Image
           className={styles.img}
           src="/img/css.jpg"
           width={50}
           height={50}
           alt="Loading..."
         />
         <h3 className={styles.h3}>Препроцессоры ⚙️</h3>
           <Image className={styles.spanLow}
                  src="/img/hard.png"
                  height={30}
                  width={30}
                  alt="Loading..."/>
           <div className={styles.overlay_right}>
               <ul>
                   <li>Переменные</li>
                   <li>Функции</li>
                   <li>Наследование</li>
                   <li>Видеоролик</li>
           <Link className={styles.a} href="/css/preprocessors">Начать </Link>

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
    </div>
        
      </article>
      
  </div>
  )
}

