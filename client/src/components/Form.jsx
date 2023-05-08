import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { setAccess, setUser } from '../redux/actions';
import { validate, validateFields } from '../utils/Verification';

import imageEyeView from "../assets/img/eyeView.png";
import imageEyeHide from "../assets/img/eyeHide.png";

import styles from "../assets/styles/components/Form.module.css";

const Form = () => {



	const access = useSelector((state) => state.access);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	//Estado para ver la contraseña
	const [pass, setPass] = useState(false);

	const statusPassword = (event) => {
		event.preventDefault();
		if (pass) {
			setPass(false);
		} else {
			setPass(true);
		}
	};


	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	const login = async (form) => {
		console.log(form);
		await axios
			.get(`/user?email=${form.email}&password=${form.password}`)
			.then((response) => {
				console.log(response.data.id);
				const id = response.data.id;
				dispatch(setUser(id));
				dispatch(setAccess(true));
				navigate('/home');
				setForm({ email: '', password: '' });
				console.log('bienvenido');
			})
			.catch((error) => {
				dispatch(setAccess(false));
				console.log('No estas logueado');
				console.log(error);
			});
	};

	const handleChangeInput = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setForm({ ...form, [property]: value });
		setErrors(validate({ ...form, [property]: value }, errors));
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();
		if (!validateFields(form)) {
			console.log('Completa los campos correctamente');
			return;
		}
		login(form);
	};



	return (
		<div className={styles.content}>
			<form action="" onSubmit={handleSubmitForm}>
				<div className={styles.ContentEmail}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChangeInput}
					/>
					<span>{errors.email}</span>
				</div>
				<div className={styles.contentPassword}>
					<div className={styles.contentDivPassword}>
						<label htmlFor="password">Password:</label>
						<input
							type={pass ? 'text' : 'password'}
							name="password"
							value={form.password}
							onChange={handleChangeInput}
						/>
					</div>
					<div className={styles.contentImageEye} onClick={statusPassword}>
						<img
							className={styles.imageEye}
							src={pass ? imageEyeView : imageEyeHide}
							alt=""
						/>
					</div>
					<span>{errors.password}</span>
				</div>
				<button className={styles.buttonLogIn}>Log in</button>
			</form>
		</div>
	);
};

export default Form;
