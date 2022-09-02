import React from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar';
export default function About() {
   return (
      <>
         <h1>Página about</h1>
         <Navbar />
         <ul><li><Link href="/"><a>Voltar para o menu</a></Link></li></ul>

      </>

   );
}