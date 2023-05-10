import React from 'react';
import styles from "../assets/styles/components/views/AboutPage.module.css"

import logoMF from "../assets/img/Logo.webp";
import logoLinkedin from '../assets/img/linkedinLogo.webp';
import logoGithub from '../assets/img/gitHubLogo.webp';

const AboutPage = () => {
	return (
		<div className={styles.content}>
			<h1 className={styles.titleMain}>Who am I?</h1>
			<div className={styles.contentAll}>
				<div className={styles.contentLogo}>
					<a
						href="https://portfolio-miguel-fernandez.netlify.app/"
						target="_blank"
					>
						<img src={logoMF} alt="logo" title="Click here" />
					</a>
				</div>
				<div className={styles.contentText}>
					<div className={styles.contentDescription}>
						<p className={styles.description}>
							I am a person, who likes to prepare a good coffee, sit down to
							learn and program, you can check my projects on Github and more
							details about me on Linkedin.
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
