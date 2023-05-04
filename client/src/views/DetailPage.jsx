import React from 'react';
import { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import axios  from "axios";


import {detailById} from "../redux/actions";


import styles from '../assets/styles/components/views/DetailPage.module.css';


const DetailPage = () => {

	const {id} = useParams();
	const dispatch=useDispatch();

	const character=useSelector(state=>state.detail);

	useEffect(() => {
		dispatch(detailById(id));
	}, [character]);



  

//   axios.get(`/character/${id}`)
//   .then((response)=>{
//       setCharacter(response.data);
//   })
// 	.catch((error)=>{
//     console.log(error);
//   })


	return (
		<div className={styles.content}>
			<div className={styles.contentTitle}>
				<h1 className={styles.titulo}>Bievenido a los detalles</h1>
				<Link to="/home">
					<h3 className={styles.link}>Volver</h3>
				</Link>
			</div>

			{character.name ? (
				<div className={styles.contentCard}>
					<h2 className={styles.nombre}>{character.name}</h2>
					<p className={styles.estado}>{character.status}</p>
					<p className={styles.especie}>{character.species}</p>
					<p className={styles.gender}>{character.gender}</p>
					<p className={styles.origen}>{character.origin?.name}</p>
					<img className={styles.imagen} src={character.image} alt="img" />
				</div>
			) : (
				<h3 className={styles.carga}>Loading...</h3>
			)}
		</div>
	);
};

export default DetailPage;
