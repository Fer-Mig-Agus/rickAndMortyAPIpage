import React from 'react';
import styles from '../assets/styles/components/ResetPasswordTwo.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useState } from 'react';
import axios from 'axios';

//Importo lo necesario para toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPasswordTwo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmError, setConfirmError] = useState('');

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

	const handleChangePassword = (event) => {
		event.preventDefault();
		const value = event.target.value;
		setPassword(value);
		validatePassword(value);
	};

	const handleChangeConfirmPassword = (event) => {
		event.preventDefault();
		const value = event.target.value;
		setConfirmPassword(value);
		validateConfirmPassword(value);
	};

	const { id } = useParams();

	const displaySuccessReset = (message) => {
		swal({
			title: 'Operacion exitosa',
			text: message,
			icon: 'success',
			buttons: 'Aceptar',
		}).then((response) => {
			if (response) {
				navigate('/');
			}
		});
	};

	const handleResetPassword = async (event) => {
		event.preventDefault();
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
		if (!passwordRegex.test(password)) {
			return displayFailedMessage(
				'La contraseña no posee la estructura pedida',
			);
		}
		if (password !== confirmPassword) {
			return displayFailedMessage('Las contraseñas no coinciden');
		}
		try {
			const { data } = await axios.post(`/user/olvidate_password/${id}`, {
				password,
			});
			console.log(data);
			displaySuccessReset(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	const validatePassword = (password) => {
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
		if (!passwordRegex.test(password)) {
			setPasswordError(
				'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número.',
			);
		} else {
			setPasswordError('');
		}
	};

	const validateConfirmPassword = (confirmPassword) => {
		if (password !== confirmPassword) {
			setConfirmError('Las contraseñas no coinciden.');
		} else {
			setConfirmError('');
		}
	};

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				<h1 className={styles.title}>Paso 2</h1>
				<form action="" onSubmit={handleResetPassword}>
					<div className={styles.contentFields}>
						<input
							type="text"
							placeholder="Nueva contraseña..."
							onChange={handleChangePassword}
							value={password}
							name=""
							id=""
						/>
						<span>{passwordError}</span>
					</div>
					<div className={styles.contentFields}>
						<input
							type="text"
							placeholder="Repite la contraseña..."
							onChange={handleChangeConfirmPassword}
							value={confirmPassword}
						/>
						<span>{confirmError}</span>
					</div>

					<button className={styles.button} type="submit">
						Cambiar contraseña
					</button>
				</form>
			</main>
			<ToastContainer />
		</div>
	);
};

export default ResetPasswordTwo;
