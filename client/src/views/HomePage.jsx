import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AllFilters from "../components/AllFilters";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

import styles from '../assets/styles/components/views/HomePage.module.css';
import { getAllCharacters, generateCopy } from '../redux/actions';

const HomePage = () => {

  const stateGlobal = useSelector((state) => state.characters);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);


    useEffect(() => {
			dispatch(generateCopy());
		}, [stateGlobal]);


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
