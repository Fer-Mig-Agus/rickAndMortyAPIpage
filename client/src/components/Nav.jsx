import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/actions';
import styles from '../assets/styles/components/Nav.module.css';

const Nav = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const handleLogOut = async (event) => {
		event.preventDefault();
		dispatch(logOutUser());
		navigate('/');
	};

	const handleLogIn = (event) => {
		event.preventDefault();
		navigate('/login');
	};

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				<Link className={styles.link} to="/">
					Inicio
				</Link>
				{user.id && (
					<Link className={styles.link} to={`/favorite/${user.id}`}>
						Favoritos
					</Link>
				)}

				<Link className={styles.link} to="/about">
					Sobre mí
				</Link>
				{user.id && (
					<div className={styles.contentProfile}>
						<div className={styles.profile}>
							<img src={user.profile_picture} alt={user.email} />
						</div>
						<h3 className={styles.nameUser}>{user.first_name}</h3>
					</div>
				)}
				{!user.id ? (
					<button onClick={handleLogIn} className={styles.button}>
						Iniciar sesión
					</button>
				) : (
					<button onClick={handleLogOut} className={styles.button}>
						Cerrar sesión
					</button>
				)}
			</main>
		</div>
	);
};

export default Nav;
