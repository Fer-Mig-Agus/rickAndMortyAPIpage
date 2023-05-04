import React from 'react'
import {Link} from "react-router-dom";

import styles from '../assets/styles/components/Card.module.css';

const Card = ({id,name,image}) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentImage}>
          <img src={image} alt={name} title="Haz click en el nombre"/>
      </div>
      
      <Link to={`/detail/${id}`}>{name}</Link>
   
      <h3>{id}</h3>
    </div>
  )
}

export default Card
