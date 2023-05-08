import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {setAccess,setUser} from "../redux/actions";
import styles from "../assets/styles/components/Nav.module.css";

const Nav = () => {
	const dispatch=useDispatch();
	const navigate=useNavigate();

	const handleLogOut=(event)=>{
		event.preventDefault();
		dispatch(setAccess(false));
		dispatch(setUser(""));
		navigate("/");
	}

  return (
		<div className={styles.content}>
			<Link className={styles.link} to="/home">Home</Link>
			<Link className={styles.link} to="/favorite">Favorite</Link>
			<Link className={styles.link} to="/about">About me</Link>
			<button className={styles.buttonLogOut} onClick={handleLogOut}>
				Log out
			</button>
		</div>
	);
}

export default Nav;
