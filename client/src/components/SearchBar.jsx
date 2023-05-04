import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from  '../assets/styles/components/SearchBar.module.css';

import {getCharacterByName} from "../redux/actions"
const SearchBar = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	//para el input
	const handleValue = (event) => {
		setSearch(event.target.value);
	};

	//para el btn cuando hace click
	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(getCharacterByName(search));
	};

	return (
		<div className={styles.content}>
			<input
				type="text"
				placeholder="Name..."
				className={styles.input}
				onChange={handleValue}
			/>
			<button className={styles.button} onClick={handleSearch}>Searh</button>
		</div>
	);
}
export default SearchBar
