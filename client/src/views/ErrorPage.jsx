import React from 'react'
import styles from '../assets/styles/components/views/ErrorPage.module.css';
import image from "../assets/img/not found.png"
const ErrorPage = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.titleMain}>PAGE NOT FOUT</h1>
      <div className={styles.contentImage}>
        <img src={image} alt="Page Not Found" title='Page Not Found'/>
      </div>
      <h1 className={styles.titleMain}>ERROR 404</h1>
    </div>
  )
}

export default ErrorPage
