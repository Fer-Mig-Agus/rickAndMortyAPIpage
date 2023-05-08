import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavorites } from '../redux/actions';

import Cards from '../components/Cards';

import styles from '../assets/styles/components/views/FavoritePage.module.css';
const FavoritesPage = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const allFavorites = useSelector((state) => state.favorites);

  	console.log("Este es el user desde favorite",user);

	useEffect(() => {
		dispatch(getAllFavorites(user));
	}, []);

	useEffect(() => {
		dispatch(getAllFavorites(user));
	}, [allFavorites]);

	return (
		<div className={styles.content}>
			<h1 className={styles.titleMain}>YOUR FAVORITES</h1>
			<Cards allCharacters={allFavorites} />
		</div>
	);
};

export default FavoritesPage;
