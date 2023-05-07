import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../components/Form';
import styles from '../assets/styles/components/views/LeandingPage.module.css';
const LeandingPage = () => {
  return (
		<div>
			<h1>Bienvenido a rick and morty page</h1>

			<Form />

			<Link to="/register">No estas logueado?</Link>

		</div>
	);
}

export default LeandingPage
