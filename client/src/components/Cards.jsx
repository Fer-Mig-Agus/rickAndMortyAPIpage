import React from 'react';

import Card from './Card';

import styles from '../assets/styles/components/Cards.module.css';
const Cards = ({ allCharacters }) => {

	const displayLoadingCards=()=>{
		
	}
	return (
		<div className={styles.content}>
			{allCharacters.length ? (
				allCharacters.map(
					({ id, name, species, gender, image, origin, status }) => {
						return (
							<Card
								key={id}
								id={id}
								name={name}
								species={species}
								gender={gender}
								image={image}
								origin={origin}
								status={status}
							/>
						);
					},
				)
			) : (
				<div className={styles.characterNotFound}>
					<span className="loader"></span>
				</div>
			)}
		</div>
	);
};

export default Cards;
