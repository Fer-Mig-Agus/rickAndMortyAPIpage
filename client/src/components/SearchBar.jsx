import React from 'react'
import styles from  '../assets/styles/components/SearchBar.module.css';
const SearchBar = () => {
  return (
    <div className={styles.content}>
      <input type="text"  placeholder='Name...' className={styles.input}/>
      <button className={styles.button}>Searh</button>
    </div>
  )
}

export default SearchBar
