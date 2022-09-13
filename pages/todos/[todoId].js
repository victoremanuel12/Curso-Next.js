import Link from 'next/link'
import React from 'react'





export async function getStaticProps(context) {
   const { params } = context
   const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
   const todo = await data.json()
   return {
      props: { todo },
   }
}

export async function getStaticPaths() {
   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
   const data = await response.json()
   const paths = data.map(todo => {
      return {
         params: {
            todoId: `${todo.id}`
         },
      }
   })
   return {
      paths, fallback: false
   }

}


export default function TodoId({ todo }) {


   return (
      <div>
         <Link href="/todos"><a >Voltar</a></Link>
         <h1>Exibindo o todo: {todo.id}</h1>
         <p>
            <Link href={`/todos/${todo.id}/coments/1`}>Detalhes</Link>
            <h3>Titulo desse todo: <br />{todo.title}</h3>
         </p>

      </div>
   )
}

