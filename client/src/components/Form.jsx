import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { setAccess, setUser } from '../redux/actions';
import { validate, validateFields } from '../utils/Verification';

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
		<div>
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
						type="password"
						name="password"
						value={form.password}
						onChange={handleChangeInput}
					/>
					<span>{errors.password}</span>
				</div>
				<button>Ingresar</button>
			</form>
		</div>
	);
};

export default Form;
