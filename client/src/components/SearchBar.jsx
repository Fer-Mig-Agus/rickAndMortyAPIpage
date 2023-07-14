import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from '../assets/styles/components/SearchBar.module.css';

import { getCharacterByName } from '../redux/actions';
const SearchBar = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	//para el input
	const handleValue = (event) => {
		setSearch(event.target.value);
		dispatch(getCharacterByName(search));
	};

	// //para el btn cuando hace click
	// const handleSearch = (event) => {
	// 	event.preventDefault();
		
	// 	setSearch('');
	// };

	return (
		<div className={styles.content}>
			<input
				type="text"
				placeholder="Buscar personaje..."
				className={styles.input}
				onChange={handleValue}
			/>
			<button className={styles.button} disabled={true}>
				Searh
			</button>
		</div>
	);
};
export default SearchBar;
