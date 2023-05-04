import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

import styles from '../assets/styles/components/Card.module.css';

const Card = ({ id, name, species, gender, image, origin, status }) => {
	const dispatch = useDispatch();
	const idUser = useSelector((state) => state.user);

  const favorites=useSelector(state=> state.favorites);

	const [isFav, setIsFav] = useState(false);

	//const { pathname } = useLocation();

	const addFavorite = (character, idUser) => {
		axios
			.post(`/favorite?idUser=${idUser}`, character)
			.then((response) => {
				console.log('Se agrego a favoritos');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const removeFavorite = (id, idUser) => {
		axios
			.delete(`/favorite/${id}?idUser=${idUser}`)
			.then((response) => {
				console.log('Se elimino de favoritos');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFavorite(id, idUser);
		} else {
			setIsFav(true);
			addFavorite(
				{
					id,
					name,
					species,
					gender,
					image,
					origin,
					status,
				},
				idUser,
			);
		}
	};

     useEffect(() => {
				favorites.forEach((fav) => {
					if (fav.id === id) {
						setIsFav(true);
					}
				});
			}, []);


	return (
		<div className={styles.content}>
			{isFav ? (
				<button className={styles.favorite} onClick={handleFavorite}>
					❤️
				</button>
			) : (
				<button className={styles.favorite} onClick={handleFavorite}>
					🤍
				</button>
			)}

			<div className={styles.contentImage}>
				<img src={image} alt={name} title="Haz click en el nombre" />
			</div>
			<Link to={`/detail/${id}`}>{name}</Link>
			<h3>{id}</h3>
		</div>
	);
};

export default Card;
