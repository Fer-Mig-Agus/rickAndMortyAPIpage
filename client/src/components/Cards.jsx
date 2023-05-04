import React from 'react'

import Card from "./Card";

import styles from '../assets/styles/components/Cards.module.css';
const Cards = ({allCharacters}) => {
  return (
		<div className={styles.content}>
			{allCharacters.length ? (
				allCharacters.map(
					({ id, name, species, gender, image, origin, status }) => {
						return <Card key={id} id={id} name={name} species={species} gender={gender} image={image} origin={origin} status={status} />;
					},
				)
			) : (
				<h2>No hay Personajes...</h2>
			)}
		</div>
	);
}

export default Cards
