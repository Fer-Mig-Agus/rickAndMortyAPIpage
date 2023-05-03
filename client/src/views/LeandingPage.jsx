import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../assets/styles/components/views/LeandingPage.module.css';
const LeandingPage = () => {
  return (
		<div>
			<h1>Esta es la leanding</h1>

			<Link to="/home">
				<button>GO to home</button>
			</Link>
		</div>
	);
}

export default LeandingPage
