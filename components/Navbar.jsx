
import Link from 'next/link'
export default function Navbar() {
   return (
      <div >
         <ul>
            <li><Link href="/products"><a>Products pagina</a></Link></li>
            <li><Link href="about"><a>About pagina</a></Link></li>

         </ul>
      </div>
   )
}