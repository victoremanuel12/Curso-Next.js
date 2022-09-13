import Link from 'next/link'
import React from 'react'

export default function NotFound() {
   return (
      <>
         <h1>404</h1>
         <p>parece que sua pagina não existe</p>
         <Link href="/todos"><a>Voltar</a></Link>
      </>
   )
}
