import React from 'react'
import Head from 'next/head'
export default function Lojas() {
   return (

      <div>
         <Head>
            <title>Pagina Lojas</title>
            {/* Essas duas metas so aparece no caso de inspeção da pagina  */}
            <meta name='Keywords' content='Lojas'></meta>
            <meta name='Description' content='Encontre a Lojas mais proxima de vôce!'></meta>

         </Head>
        <h1> Página Lojas</h1>
      </div>
   )
}
