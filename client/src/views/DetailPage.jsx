import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { detailById, cleanDetailById } from '../redux/actions';

import styles from '../assets/styles/components/views/DetailPage.module.css';

const DetailPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const character = useSelector((state) => state.detail);

	useEffect(() => {
		dispatch(detailById(id));
	}, [character]);

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

				<h3 className={styles.title}>Detalles del personaje</h3>
			</div>

			{character.name ? (
				<div className={styles.contentCard}>
					<div className={styles.contentImage}>
						<img
							className={styles.image}
							src={character.image}
							alt={character.name}
							title={character.name}
						/>
					</div>
					<div className={styles.contentText}>
						
						<h2 className={styles.textDetail}>
							Name: <span>{character.name}</span>
						</h2>
						<h2 className={styles.textDetail}>
							Status: <span>{character.status}</span>
						</h2>
						<h2 className={styles.textDetail}>
							Specie: <span>{character.species}</span>{' '}
						</h2>
						<h2 className={styles.textDetail}>
							Gender: <span>{character.gender}</span>
						</h2>
						<h2 className={styles.textDetail}>
							Origin: <span>{character.origin}</span>
						</h2>
					</div>
				</div>
			) : (
				<div className={styles.characterNotFound}>
					<span className="loader"></span>
				</div>
			)}
		</div>
	);
};

export default DetailPage;
