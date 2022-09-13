import Head from 'next/head'
import Image from  'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Pagina Principal</title>
        {/* Essas duas metas so aparece no caso de inspeção da pagina  */}
        <meta name='Keywords' content='Roupas,Calçados,Boné'></meta>
        <meta name='Description' content='Encontre a melhor roupa para vôce!'></meta>

      </Head>
      <h1 className={styles.title}>Pagina Index(principal do app)</h1>
      <Image src="/images/city.jpg" width={500} height={700} alt="image city"/>
    </div>
  )
}
