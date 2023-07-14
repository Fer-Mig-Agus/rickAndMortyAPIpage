import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import styles from '../assets/styles/components/ForgetPasswordOne.module.css';
const ForgetPasswordOne = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

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

	const handleChangeEmail = (event) => {
		const value = event.target.value;
		setEmail(value);
		setError(verificarEmail(value, error));
	};

	const verificarEmail = (email, stateError) => {
		let errorFuncion = { ...stateError };
		if (!email || email === '') errorFuncion = 'Debe completar el campo';
		else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email))
			errorFuncion = 'No es un email valido';
		else errorFuncion = '';

		return errorFuncion;
	};

	const displayCancel = (event) => {
		event.preventDefault();
		swal({
			title: 'ATENCIÓN!',
			text: 'Desea cancelar la restauracion?',
			icon: 'warning',
			buttons: ['NO', 'SI'],
		}).then((response) => {
			if (response) {
				swal({
					title: 'Restauracion cancelada',
					text: 'Al cancelar la operacion tu contraseña seguira siendo la misma',
					icon: 'success',
					buttons: 'aceptar',
				}).then(() => {
					navigate('/');
				});
			}
		});
	};

	const buttonSubmit = async (event) => {
		event.preventDefault();
		if (!email || email === '')
			return displayFailedMessage('Debe completar el campo');
		else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email))
			return displayFailedMessage('No es un email valido');

		try {
			const { data } = await axios.post(`/user/olvidate_password`, { email });

			swal({
				title: `Operación completada`,
				text: data.message,
				icon: 'success',
				buttons: 'Aceptar',
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				<h1 className={styles.title}>Paso 1</h1>
				<form action="" onSubmit={buttonSubmit} className={styles.form}>
					<div className={styles.contentFields}>
						<input
							type="email"
							placeholder="Email aqui..."
							onChange={handleChangeEmail}
							value={email}
						/>
						<span>{error}</span>
					</div>
					<div className={styles.boxButton}>
						<button className={styles.button}>Enviar email</button>
						<button className={styles.button} onClick={displayCancel}>Cancelar</button>
					</div>
				</form>
			</main>
			<ToastContainer />
		</div>
	);
};

export default ForgetPasswordOne;
