import React from 'react';
import styles from '../styles/About.module.css'
import Head from 'next/head';
export default function About() {
   return (
      <>
         <Head>
            <title>Sobre Nós</title>
         </Head>

         <h1 className={styles.title}>Sobre Nós</h1>
         <div className={styles.description}>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               um nesciunt ab harum rem neque dignissimos perspiciatis,
               ex voluptatibus excepturi placeat animi vel cupiditate corrupti
               similique nulla in, repellendus assumenda sint?
            </p>
            <p>Seja bem vindo a nossa loja</p>

         </div>
      </>

   );
}