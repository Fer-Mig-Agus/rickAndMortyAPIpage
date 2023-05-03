import React from 'react'
import {Link} from "react-router-dom";
import styles from "../assets/styles/components/Nav.module.css";

const Nav = () => {
  return (
		<div>
			<Link to="/home">Home</Link>
			<Link to="/favorite">Favorite</Link>
			<Link to="/about">About me</Link>
		</div>
	);
}

export default Nav;
