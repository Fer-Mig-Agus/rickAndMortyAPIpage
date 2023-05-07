import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { validate, validateFields } from '../utils/Verification';

const Register = () => {
	const dispatch = useDispatch();

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

	return (
		<div>
			<h1>REGISTRATE!!!</h1>
			<form action="" onSubmit={handleSubmitForm}>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChangeInput}
					/>
					<span>{errors.email}</span>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="text"
						name="password"
						value={form.password}
						onChange={handleChangeInput}
					/>
					<span>{errors.password}</span>
				</div>
				<button>Check in</button>
			</form>

			<Link to="/">Return</Link>
		</div>
	);
};

export default Register;
