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

	const restorePage = (event) => {
		event.preventDefault();
		dispatch(generateCopy());
	};

	return (
		<div className={styles.content}>
			<div className={styles.contentFilterBox}>
				<select
					name=""
					id=""
					onChange={handleOrderName}
					className={styles.selectOption}
				>
					<option value="default">Orden por Nombre</option>
					<option value="ascendente">Ascendente</option>
					<option value="descendente">Descendente</option>
				</select>
			</div>

			<div className={styles.contentFilterBox}>
				<select
					name=""
					id=""
					onChange={handleOrderId}
					className={styles.selectOption}
				>
					<option value="default">Orden por ID</option>
					<option value="ascendente">Ascendente</option>
					<option value="descendente">Descendente</option>
				</select>
			</div>

			<div className={styles.contentFilterBox}>
				<select
					name=""
					id=""
					onChange={handleFilterByLive}
					className={styles.selectOption}
				>
					<option value="default">Estado</option>
					<option value="alive">Vivo</option>
					<option value="dead">Muerto</option>
					<option value="unknown">Desconocido</option>
				</select>
			</div>

			<div className={styles.contentFilterBox}>
				<select
					name=""
					id=""
					onChange={handleFilterByGender}
					className={styles.selectOption}
				>
					<option value="default">Género</option>
					<option value="hombre">Masculino</option>
					<option value="mujer">Femenino</option>
					<option value="unknown">Desconocido</option>
				</select>
			</div>
			<button className={styles.button} onClick={restorePage}>
				Restaurar
			</button>
		</div>
	);
};

export default AllFilters;
