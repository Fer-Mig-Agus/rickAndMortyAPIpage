import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AllFilters from '../components/AllFilters';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

import styles from '../assets/styles/components/views/HomePage.module.css';
import {
	getAllCharacters,
	generateCopy,
	getAllFavorites,
	saveUser,
} from '../redux/actions';

const HomePage = () => {
	const stateGlobal = useSelector((state) => state.characters);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCharacters());

		if (user.id) {
			console.log('entro a buscar los favoritos: ', user.id);
			dispatch(getAllFavorites(user.id));
		}
	}, []);

	useEffect(() => {
		dispatch(generateCopy());
	}, [stateGlobal]);

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				<div className={styles.contentFilters}>
					<SearchBar />
					<AllFilters />
				</div>

				<div className={styles.contentPagination}>
					<Pagination />
				</div>
			</main>
		</div>
	);
};

export default HomePage;
