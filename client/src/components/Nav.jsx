import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/actions';
import styles from '../assets/styles/components/Nav.module.css';

import iconMenu from '../assets/img/menu-2.png';
const Nav = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const [viewMenuIcon, setViewMenuIcon] = useState(false);
	const [viewMenu, setViewMenu] = useState(false);

	const handleView = (event) => {
		event.preventDefault();
		setViewMenu(!viewMenu);
	};

	const handleItemView = (event) => {
		event.preventDefault();
		const page = event.target.name;
		setViewMenu(!viewMenu);
		navigate(page);
	};

	const handleLogOut = async (event) => {
		event.preventDefault();
		dispatch(logOutUser());
		navigate('/');
	};

	const handleLogIn = (event) => {
		event.preventDefault();
		navigate('/login');
	};
	useEffect(() => {
		if (window.screen.width <= 576) {
			setViewMenuIcon(true);
		}
	}, []);

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				{!viewMenuIcon ? (
					<div className={styles.contentMenuNormal}>
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
					</div>
				) : (
					<div className={styles.contentSubMenu}>
						<img
							src={iconMenu}
							alt=""
							className={styles.iconMenuImage}
							onClick={handleView}
						/>
						{viewMenu && (
							<div className={styles.contentMenuSmall}>
								<ul
									className={
										user.id ? `${styles.ulMenu}` : `${styles.ulMenuOnly}`
									}
								>
									<Link
										className={styles.itemMenu}
										name="/"
										onClick={handleItemView}
										to={'/'}
									>
										Inicio
									</Link>
									<Link
										className={styles.itemMenu}
										name="/about"
										onClick={handleItemView}
										to={'/about'}
									>
										Sobre mí
									</Link>
									{user.id && (
										<Link
											className={styles.link}
											onClick={handleItemView}
											name={`/favorite/${user.id}`}
										>
											Favoritos
										</Link>
									)}

									{user.id && (
										<div className={styles.contentProfile}>
											<div className={styles.profile}>
												<img src={user.profile_picture} alt={user.email} />
											</div>
											<h3 className={styles.nameUser}>{user.first_name}</h3>
										</div>
									)}
									{!user.id ? (
										<button
											onClick={handleItemView}
											name="/login"
											className={styles.button}
										>
											Iniciar sesión
										</button>
									) : (
										<button
											onClick={handleLogOut}
											className={styles.button}
										>
											Cerrar sesión
										</button>
									)}
								</ul>
							</div>
						)}
					</div>
				)}
			</main>
		</div>
	);
};

export default Nav;
