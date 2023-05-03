import React from 'react'

import AllFilters from "../components/AllFilters";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

import styles from '../assets/styles/components/views/HomePage.module.css';
const HomePage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentFilters}>
        <AllFilters/>
        <SearchBar/>
      </div>
      <h1>All Characters</h1>
      <Pagination/>
    </div>
  )
}

export default HomePage
