import React from 'react';
import styles from "../assets/styles/components/views/AboutPage.module.css"

import logoMF from "../assets/img/Logo.webp";
import logoLinkedin from '../assets/img/linkedinLogo.webp';
import logoGithub from '../assets/img/gitHubLogo.webp';

const AboutPage = () => {
	return (
		<div className={styles.content}>
			<h1 className={styles.titleMain}>Quien soy?</h1>
			<div className={styles.contentAll}>
				<div className={styles.contentLogo}>
					<a
						href="https://portfolio-miguel-fernandez-v2.vercel.app/"
						target="_blank"
					>
						<img src={logoMF} alt="logo" title="Click here" />
					</a>
				</div>
				<div className={styles.contentText}>
					<div className={styles.contentDescription}>
						<p className={styles.description}>
							Soy una persona, que le gusta prepararse un buen café, sentarse a
							aprender y programar, puedes consultar mis proyectos en Github y
							más detalles sobre mí en Linkedin.
						</p>
					</div>

					<div className={styles.contentLogosInfo}>
						<div className={styles.contentLinkedin}>
							<a
								href="https://www.linkedin.com/in/miguel-agustin-fernandez-aa1596248/"
								target="_blank"
							>
								<img src={logoLinkedin} alt="logoLinkedin" title="Click here" />
							</a>
						</div>
						<div className={styles.contentGithub}>
							<a href="https://github.com/Fer-Mig-Agus" target="_blank">
								<img src={logoGithub} alt="logoGithub" title="Click here" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
