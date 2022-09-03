import Link from 'next/link'
import Navbar from '../components/Navbar'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Pagina Principal</title>
        {/* Essas duas metas so aparece no caso de inspeção da pagina  */}
        <meta name='Keywords' content='Roupas,Calçados,Boné'></meta>
        <meta name='Description' content='Encontre a melhor roupa para vôce!'></meta>

      </Head>
      <h1>Pagina Index(principal do app)</h1>
    </div>
  )
}
