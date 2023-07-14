import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import swal from 'sweetalert';

import axios from 'axios';

const ConfirmedUser = () => {
	const navigate = useNavigate();

	const { token } = useParams();

	console.log('entro al confirmar cuenta, token: ', token);

	const [message, setMessage] = useState('');

	const getConfirmed = async () => {
		try {
			console.log('entro al confirmar');
			const { data } = await axios.get(`/user/confirmar/${token}`);
			setMessage(data.message);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		console.log('entro al confirmar cuenta, token: ', token);
	}, []);

	const displayConfimed = () => {
		swal({
			title: 'Cuenta confirmada',
			icon: 'success',
			text: 'Ahora podés Iniciar Sesion',
			buttons: 'Aceptar',
		}).then((response) => {
			if (response) {
				getConfirmed();
				navigate('/login');
			}
		});
	};

	return <div>{displayConfimed()}</div>;
};

export default ConfirmedUser;
