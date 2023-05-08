import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { validate, validateFields } from '../utils/Verification';
import styles from "../assets/styles/components/Register.module.css";

const Register = () => {

	const navigate = useNavigate();


	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	const registrarUser = async (form) => {
		console.log(form);
		await axios
			.post(`/user?email=${form.email}&password=${form.password}`)
			.then((response) => {
				console.log('registrado');
				window.location.reload();
			})
			.catch((error) => {
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
		registrarUser(form);
	};

	const handleReturn=(event)=>{
		event.preventDefault();
		navigate("/");
	}

	return (
		<div className={styles.content}>
			<h1 className={styles.titleMain}>REGISTRATE</h1>

			<div className={styles.contentForm}>
				<form action="" onSubmit={handleSubmitForm}>
					<div className={styles.ContentFields}>
						<label htmlFor="email">Email:</label>
						<input
						placeholder='Email...'
							type="email"
							name="email"
							value={form.email}
							onChange={handleChangeInput}
						/>
						<span>{errors.email}</span>
					</div>
					<div className={styles.ContentFields}>
						<label htmlFor="password">Password:</label>
						<input
						placeholder='Password...'
						className={styles.inputPass}
							type="text"
							name="password"
							value={form.password}
							onChange={handleChangeInput}
						/>
						<span>{errors.password}</span>
					</div>
					<div className={styles.contentButtonAll}>
						<button className={styles.buttonCheckIn}>Check in</button>
						<button className={styles.buttonReturn} onClick={handleReturn}>
							Return
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
