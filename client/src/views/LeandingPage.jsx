import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import styles from '../assets/styles/components/views/LeandingPage.module.css';
import image from '../assets/img/Rick-and-Morty.webp';
const LeandingPage = () => {
	const [login, setLogin] = useState(true);

	const handleChangeLogin = (event) => {
		event.preventDefault();
		setLogin(!login);
	};

	return (
		<div className={styles.contentainer}>
			<main className={styles.content}>
				<div className={styles.contentLeanding}>
					<h1 className={styles.titleMain}>Bienvenido a</h1>
					<div className={styles.contentImage}>
						<img
							className={styles.image}
							src={image}
							alt="rickAndMortyLogo"
							title="Visita https://portfolio-miguel-fernandez-v2.vercel.app/"
						/>
					</div>
				</div>
				<div className={styles.contentOptions}>
					<div className={styles.boxButton}>
						<button
							className={
								!login ? `${styles.button}` : `${styles.disabledButton}`
							}
							onClick={handleChangeLogin}
						>
							Iniciar Sesión
						</button>
						<button
							className={
								login ? `${styles.button}` : `${styles.disabledButton}`
							}
							onClick={handleChangeLogin}
						>
							Registrarse
						</button>
					</div>
					{login ? (
						<div>
							<Login />
						</div>
					) : (
						<div>
							<Register />
						</div>
					)}
				</div>
			</main>
		</div>
	);
};

export default LeandingPage;
