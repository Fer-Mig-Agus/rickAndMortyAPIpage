import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../components/Form';
import styles from '../assets/styles/components/views/LeandingPage.module.css';
import image from '../assets/img/Rick-and-Morty.png';
const LeandingPage = () => {
	return (
		<div className={styles.content}>
			<h1 className={styles.titleMain}>WELCOME TO</h1>
			<div className={styles.contentImage}>
				<a
					href="https://portfolio-miguel-fernandez.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className={styles.image}
						src={image}
						alt="rickAndMortyLogo"
						title="Visita https://portfolio-miguel-fernandez.netlify.app/"
					/>
				</a>
			</div>

			<Form />

			<Link to="/register" className={styles.linkRegister}>Still not registered?</Link>
		</div>
	);
};

export default LeandingPage;
