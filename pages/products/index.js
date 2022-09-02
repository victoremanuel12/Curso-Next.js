import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Products() {
 return (
   <div>
      <h1>Página Produtos</h1>
      <Navbar/>
      <ul><li><Link href="/"><a>Voltar para o menu</a></Link></li></ul>

   </div>
 );
}