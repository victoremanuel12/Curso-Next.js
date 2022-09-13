import Link from 'next/link'
import styles from '../../styles/todo.module.css'

export default function Todos({todos}) {
   return (
      <>
         <h1>Tarefas a fazer:</h1>
         <ul className={styles.todoList}>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
         {todos.map(todo => (
            <li key={todo.id}>
               {todo.title} -
               <Link href={`/todos/${todo.id}`}><a> ver mais </a></Link>
            
            </li>
            
         ))}
         </ul>
      </>
   )
}
export async function getStaticProps(){
   const data = await fetch('https://jsonplaceholder.typicode.com/todos')
   const todos = await data.json()
   return{
      props: {todos},
   }
}
