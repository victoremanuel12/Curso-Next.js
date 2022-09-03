import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </>
  )
}
