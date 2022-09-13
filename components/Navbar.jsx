import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
   return (
      <div>
         <ul className={styles.navbar}>
            <li><Link href="/"><a>Menu</a></Link></li>
            <li><Link href="/products"><a>Produtos</a></Link></li>
            <li><Link href="/about"><a>Sobre nós</a></Link></li>
            <li><Link href="/lojas"><a >Lojas</a></Link></li>
            <li><Link href="/todos"><a >Tarefas</a></Link></li>


         </ul>
      </div>
   )
}