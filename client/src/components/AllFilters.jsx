import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../assets/styles/components/AllFilters.module.css';
import {
	filterOrderByName,
	filterOrderById,
	filterByLive,
	filterByGender,
} from '../redux/actions';
const AllFilters = () => {
	const dispatch = useDispatch();

	const handleOrderName = (event) => {
		let order = '';
		switch (event.target.value) {
			case 'ascendente':
				order = 'ascendente';
				break;
			case 'ascendente':
				order = 'ascendente';
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
			case 'ascendente':
				order = 'ascendente';
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
		window.location.reload();
	}

	return (
		<div className={styles.content}>
			<div>
				<h3>Order by Name</h3>
				<select name="" id="" onChange={handleOrderName}>
					<option value="default">Default</option>
					<option value="ascendente">upward</option>
					<option value="descendete">falling</option>
				</select>
			</div>

			<div>
				<h3>Order by Id</h3>
				<select name="" id="" onChange={handleOrderId}>
					<option value="default">Default</option>
					<option value="ascendente">upward</option>
					<option value="descendete">falling</option>
				</select>
			</div>

			<div>
				<h3>Filter by Live</h3>
				<select name="" id="" onChange={handleFilterByLive}>
					<option value="default">Default</option>
					<option value="alive">Alive</option>
					<option value="dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>

			<div>
				<h3>Filter by Gender</h3>
				<select name="" id="" onChange={handleFilterByGender}>
					<option value="default">Default</option>
					<option value="hombre">Male</option>
					<option value="mujer">Female</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>

			<button onClick={restorePage}>
				Restore
			</button>
		</div>
	);
};

export default AllFilters;
