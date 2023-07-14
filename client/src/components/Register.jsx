import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { validate, validateFields } from '../utils/Verification';
import styles from '../assets/styles/components/Register.module.css';

//importacion para toastify and sweetalert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const Register = () => {
	//Toastify module for success message
	const displaySuccessMessage = (mensaje) => {
		toast.success(mensaje, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	// Toastify module for error messages
	const displayFailedMessage = (mensaje) => {
		toast.error(mensaje, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const navigate = useNavigate();

	const [form, setForm] = useState({
		first_name: '',
		last_name: '',
		date_birth: '',
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		first_name: '',
		last_name: '',
		date_birth: '',
		email: '',
		password: '',
	});

	const handleChangeInput = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setForm({ ...form, [property]: value });
		setErrors(validate({ ...form, [property]: value }, errors));
	};

	const registrarUser = async (form) => {
		try {
			const { data } = await axios.post(`/user/register`, form);

			displaySuccessMessage(data.message);
			setForm({ email: '', password: '' });
		} catch (error) {
			displayFailedMessage(error.response.data.error);
		}
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();
		if (!validateFields(form)) {
			displayFailedMessage('Todos los campos son obligatorios');
			return;
		}
		registrarUser(form);
	};

	const handleReturn = (event) => {
		event.preventDefault();
		navigate('/');
	};

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				<form action="" onSubmit={handleSubmitForm} className={styles.form}>
					<div className={styles.ContentFields}>
						<input
							placeholder="Nombre..."
							type="text"
							name="first_name"
							value={form.first_name}
							onChange={handleChangeInput}
						/>
						<span>{errors.first_name}</span>
					</div>
					<div className={styles.ContentFields}>
						<input
							placeholder="Apellido..."
							type="text"
							name="last_name"
							value={form.last_name}
							onChange={handleChangeInput}
						/>
						<span>{errors.last_name}</span>
					</div>
					<div className={styles.ContentFields}>
						<input
							type="date"
							name="date_birth"
							value={form.date_birth}
							onChange={handleChangeInput}
						/>
					</div>
					<div className={styles.ContentFields}>
						<input
							placeholder="Email..."
							type="email"
							name="email"
							value={form.email}
							onChange={handleChangeInput}
						/>
						<span>{errors.email}</span>
					</div>
					<div className={styles.ContentFields}>
						<input
							placeholder="Contraseña..."
							className={styles.inputPass}
							type="text"
							name="password"
							value={form.password}
							onChange={handleChangeInput}
						/>
						<span>{errors.password}</span>
					</div>
					<div className={styles.contentButtonAll}>
						<button className={styles.button}>Registrar</button>
						<button className={styles.button} onClick={handleReturn}>
							Cancelar
						</button>
					</div>
				</form>
			</main>
			<ToastContainer />
		</div>
	);
};

export default Register;
