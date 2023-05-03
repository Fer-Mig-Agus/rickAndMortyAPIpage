import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cards from "./Cards";

import styles from  '../assets/styles/components/Pagination.module.css';

const Pagination = () => {

  
  const allCharacters = useSelector((state) => state.copyCharacters);







  return (
    <div>
      <h1>Esto es paginacion</h1>
    </div>
  )
}

export default Pagination
