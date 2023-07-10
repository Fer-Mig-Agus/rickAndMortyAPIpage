import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/styles/components/AllFilters.module.css';
import {
	filterOrderByName,
	filterOrderById,
	filterByLive,
	filterByGender,
	generateCopy,
} from '../redux/actions';
const AllFilters = () => {


	const dispatch = useDispatch();
	


	const handleOrderName = (event) => {
		let order = '';
		switch (event.target.value) {
			case 'ascendente':
				order = 'ascendente';
				break;
			case 'descendente':
				order = 'descendente';
				break;
			default:
				order = 'default';
		}
		dispatch(filterOrderByName(order));
	};

	const handleOrderId = (event) => {
		let order = '';
		switch (event.target.value) {
			case 'ascendente':
				order = 'ascendente';
				break;
			case 'descendente':
				order = 'descendente';
				break;
			default:
				order = 'default';
		}
		dispatch(filterOrderById(order));
	};

	const handleFilterByLive = (event) => {
		let live = '';
		switch (event.target.value) {
			case 'alive':
				live = 'alive';
				break;
			case 'dead':
				live = 'dead';
				break;
			case 'unknown':
				live = 'unknown';
				break;
			default:
				live = 'default';
		}
		dispatch(filterByLive(live));
	};

	const handleFilterByGender = (event) => {
		let gender = '';
		switch (event.target.value) {
			case 'hombre':
				gender = 'hombre';
				break;
			case 'mujer':
				gender = 'mujer';
				break;
			case 'unknown':
				gender = 'unknown';
				break;
			default:
				gender = 'default';
		}
		dispatch(filterByGender(gender));
	};

	const restorePage=(event)=>{
		event.preventDefault();
		dispatch(generateCopy());
	}

	return (
		<div className={styles.content}>
			<button className={styles.button} onClick={restorePage}>
				Restore
			</button>
			<div className={styles.contentFilterBox}>
				<h3 className={styles.filterTitle}>Order by Name</h3>
				<select name="" id="" onChange={handleOrderName}>
					<option value="default">All</option>
					<option value="ascendente">upward</option>
					<option value="descendete">falling</option>
				</select>
			</div>

			<div className={styles.contentFilterBox}>
				<h3 className={styles.filterTitle}>Order by Id</h3>
				<select name="" id="" onChange={handleOrderId}>
					<option value="default">All</option>
					<option value="ascendente">upward</option>
					<option value="descendete">falling</option>
				</select>
			</div>

			<div className={styles.contentFilterBox}>
				<h3 className={styles.filterTitle}>Filter by Live</h3>
				<select name="" id="" onChange={handleFilterByLive}>
					<option value="default">All</option>
					<option value="alive">Alive</option>
					<option value="dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>

			<div className={styles.contentFilterBox}>
				<h3 className={styles.filterTitle}>Filter by Gender</h3>
				<select name="" id="" onChange={handleFilterByGender}>
					<option value="default">All</option>
					<option value="hombre">Male</option>
					<option value="mujer">Female</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
		</div>
	);
};

export default AllFilters;
