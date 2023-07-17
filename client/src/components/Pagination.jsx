import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cards from './Cards';

import styles from '../assets/styles/components/Pagination.module.css';
import next from '../assets/img/nextt.png';
import preview from '../assets/img/preview.png';

const Pagination = () => {
	//Aqui traigo todos los personajes, pero uso la copia
	const allCharacters = useSelector((state) => state.copyCharacters);

	//Estados para controlar la paginacion
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(window.screen.width <= 400 ? 4 : 8);
	const [pageNumberLimit, setPageNumberLimit] = useState(
		window.screen.width <= 400 ? 4 : 8,
	);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(
		window.screen.width <= 400 ? 3 : 8,
	);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	//funcion para controlar la paginacion,
	//se activa haciendo click sobre el numero
	const handleClick = (event) => {
		setCurrentPage(Number(event.target.id));
	};

	//Este useEfect sive para resetear el paginado cuando cambie
	//el estado global

	useEffect(() => {
		setMinPageNumberLimit(0);
		setCurrentPage(1);
		setItemsPerPage(window.screen.width <= 400 ? 4 : 8);
	}, [allCharacters]);

	//Este bucle for se encarga de guardar la cantidad de paginas que hay.
	//para ello se hace un calculo de la cantidad de elementos existentes y los que se mostraran

	const pages = [];
	for (let i = 1; i <= Math.ceil(allCharacters.length / itemsPerPage); i++) {
		pages.push(i);
	}

	//Aqui se calcula el ultimo numero y el primero
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = allCharacters.slice(indexOfFirstItem, indexOfLastItem);

	const renderPageNumbers = pages.map((number) => {
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<li
					key={number}
					id={number}
					onClick={handleClick}
					className={currentPage == number ? styles.active : styles.normal}
				>
					{number}
				</li>
			);
		} else {
			return null;
		}
	});

	//Esta funcion es para el boton Next
	const handleNextBtn = () => {
		setCurrentPage(currentPage + 1);
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	//Esta funcion es para el boton Previous
	const handlePrevBtn = () => {
		setCurrentPage(currentPage - 1);
		if ((currentPage - 1) % pageNumberLimit == 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	//Estas dos condiciones es para saber si se deben de mostrar los puntitos (...)

	let pageIncrementBtn = null;
	if (pages.length > maxPageNumberLimit) {
		pageIncrementBtn = (
			<li className={styles.puntitos} onClick={handleNextBtn}>
				&hellip;
			</li>
		);
	}

	let pageDecrementBtn = null;
	if (minPageNumberLimit >= 1) {
		pageDecrementBtn = (
			<li className={styles.puntitos} onClick={handlePrevBtn}>
				&hellip;
			</li>
		);
	}

	return (
		<div className={styles.content}>
			{/* Esto renderiza los botones de la paginacion */}
			<ul className={styles.pageNumbers}>
				<li>
					{window.screen.width <= 576 ? (
						
						<div
							disabled ={currentPage === pages[0] ? true : false}
							
							className={styles.contentIconButton}
						>
							<img
								src={preview}
								onClick={handlePrevBtn}
								disabled={currentPage === pages[0] ? true : false}
								alt=""
							/>
						</div>
					) : (
						<button
							onClick={handlePrevBtn}
							className={styles.buttonPagination}
							disabled={currentPage === pages[0] ? true : false}
						>
							Previous
						</button>
					)}
				</li>
				{pageDecrementBtn}
				{renderPageNumbers}
				{pageIncrementBtn}
				<li>
					{window.screen.width <= 576 ? (
						<div
							disabled={currentPage == pages[pages.length - 1] ? true : false}
							className={styles.contentIconButton}
						>
							<img src={next} onClick={handleNextBtn} alt="" />
						</div>
					) : (
						<button
							onClick={handleNextBtn}
							className={styles.buttonPagination}
							disabled={currentPage == pages[pages.length - 1] ? true : false}
						>
							Next
						</button>
					)}
				</li>
			</ul>
			{/* Esto renderiza las tarjetas */}
			<Cards allCharacters={currentItems} />
		</div>
	);
};

export default Pagination;
