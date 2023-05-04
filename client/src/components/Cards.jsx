import React from 'react'

import Card from "./Card";

import styles from '../assets/styles/components/Cards.module.css';
const Cards = ({allCharacters}) => {
  return (
    <div className={styles.content}>
      {
        allCharacters.length ?
        (allCharacters.map(({id,name,image})=>{
          return (
            <Card 
            key={id}
            id={id}
            name={name}
            image={image}
            />
          )
        }))
        :
        (<h2>No hay Personajes...</h2>)
      }
    </div>
  )
}

export default Cards
