import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
export default function TodoId() {
   const router = useRouter()
   const todoId = router.query.todoId
   const comentsId = router.query.comentsId
   return (
      <div>
         <Link href={`/todos/${todoId}`}><a>Voltar</a></Link>
         <h1>Exibindo o Comentario número: {comentsId}</h1>
         <p>do todo:{todoId} </p>
      </div>
   )
}
