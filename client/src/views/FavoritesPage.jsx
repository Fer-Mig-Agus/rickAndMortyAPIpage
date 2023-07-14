import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavorites } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';

import styles from '../assets/styles/components/views/FavoritePage.module.css';
const FavoritesPage = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const allFavorites = useSelector((state) => state.favorites);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAllFavorites(user.id));
	}, []);

	useEffect(() => {
		dispatch(getAllFavorites(user.id));
		console.log('Este es el user desde favorite', user);
	}, [allFavorites]);

	return (
		<div className={styles.content}>
			<div className={styles.contentTitle}>
				<div
					className={styles.contentIconReturn}
					onClick={() => {
						navigate('/');
					}}
				>
					<img
						src="https://icongr.am/clarity/undo.svg?size=147&color=ffffff"
						alt=""
						title="Volver atras"
					/>
				</div>

				<h3 className={styles.title}>Mis Favoritos</h3>
			</div>
			<Cards allCharacters={allFavorites} />
		</div>
	);
};

export default FavoritesPage;
