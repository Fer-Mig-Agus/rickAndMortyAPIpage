import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
//importacion para toastify and sweetalert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

import questionIcon from '../assets/img/question.png';

import styles from '../assets/styles/components/Card.module.css';

const Card = ({ id, name, species, gender, image, origin, status }) => {
	//Toastify module for success message
	const displaySuccessMessage = (mensaje) => {
		toast.success(mensaje, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	// Toastify module for error messages
	const displayFailedMessage = (mensaje) => {
		toast.error(mensaje, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const user = useSelector((state) => state.user);

	const favorites = useSelector((state) => state.favorites);

	const [isFav, setIsFav] = useState(false);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const addFavorite = async (character, id) => {
		try {
			const { data } = await axios.post(`/favorite?idUser=${id}`, character);
			displaySuccessMessage('Agregado a favoritos');
		} catch (error) {
			console.log(error);
		}
	};

	const removeFavorite = async (characterId, id) => {
		try {
			const { data } = await axios.delete(
				`/favorite/${characterId}?idUser=${id}`,
			);
			displaySuccessMessage('Eliminado de Favoritos');
			
		} catch (error) {
			console.log(error);
		}
	};

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFavorite(id, user.id);
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
				user.id,
			);
		}
	};

	useEffect(() => {
		favorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [favorites]);

	const displayResponse = (event) => {
		event.preventDefault();
		swal({
			title: 'Que es esto?',
			text: 'Una vez que inicies sesión tendrás la posibilidad de de agregar a cada personaje a tus favoritos. Inicia sesión y agrega tantos como quieras',
			icon: 'info',
			buttons: 'Aceptar',
		});
	};

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				{user.id ? (
					isFav ? (
						<button className={styles.favoriteActive} onClick={handleFavorite}>
							❤️
						</button>
					) : (
						<button className={styles.favorite} onClick={handleFavorite}>
							🤍
						</button>
					)
				) : (
					<div className={styles.question} onClick={displayResponse}>
						<img src={questionIcon} alt="" />
					</div>
				)}

				<div className={styles.contentImage}>
					<img
						src={image}
						className={styles.image}
						alt={name}
						title="Haz click en el nombre"
					/>
				</div>
				<div
					className={styles.contentText}
					onClick={() => navigate(`/detail/${id}`)}
				>
					<h3 className={styles.name}>{name}</h3>
					<h3 className={styles.id}>{id}</h3>
				</div>
			</main>
			<ToastContainer />
		</div>
	);
};

export default Card;
