import React, { useContext, useState } from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { TodoContext } from './TodoContext';

const style = {
	container: {
		padding: '20px'
	},
	paper: {
		marginTop: 15,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px',
		backgroundColor: '#f5f5f5'
	},
	form: {
		width: '100%'
	},
	submit: {
		marginTop: 20,
		marginBottom: 20
	},
	space: {
		paddingTop: '20px'
	}
};

function DetallesLaboratorio(data) {
	const context = useContext(TodoContext);
	const [ editId, seteditId ] = useState(data['data'].id);
	const [ editCodigo, seteditCodigo ] = useState(data['data'].codlaboratorio);
	const [ editNombre, seteditNombre ] = useState(data['data'].nombre);
	const [ editUbicacion, seteditUbicacion ] = useState(data['data'].ubicacion);
	const [ editObservacion, seteditObservacion ] = useState(data['data'].observacion);
	const [ editUsuario, seteditUsuario ] = useState('');
	//const [ editUsuario, seteditUsuario ] = useState(data['data'].codusuario + '-' + data['data'].usuario);
	//const user = data['data'].codusuario + '-' + data['data'].usuario;

	const onEditSubmit = (editId, event) => {
		event.preventDefault();
		context.updateTodo({
			id: editId,
			codlaboratorio: editCodigo,
			nombre: editNombre,
			ubicacion: editUbicacion,
			observacion: editObservacion,
			usuario_id: editUsuario
		});
	};

	function historyBack() {
		window.history.back();
	}

	return (
		<Container style={style.container} component="main" maxWidth="lg" justify="center">
			<Paper style={style.paper}>
				<form style={style.form}>
					<Grid container spacing={2}>
						<Grid item md={6} xs={6}>
							<TextField
								type="text"
								value={editCodigo}
								onChange={(event) => {
									seteditCodigo(event.target.value);
								}}
								fullWidth={true}
								label="Código Laboratorio"
							/>
						</Grid>
						<Grid item md={6} xs={6}>
							<TextField
								type="text"
								value={editNombre}
								onChange={(event) => {
									seteditNombre(event.target.value);
								}}
								fullWidth={true}
								label="Nombre Laboratorio"
							/>
						</Grid>
						<Grid item md={6} xs={6}>
							<TextField
								type="text"
								value={editUbicacion}
								onChange={(event) => {
									seteditUbicacion(event.target.value);
								}}
								fullWidth={true}
								label="Ubicación Laboratorio"
							/>
						</Grid>
						<Grid item md={6} xs={6}>
							<TextField
								type="text"
								value={editObservacion}
								onChange={(event) => {
									seteditObservacion(event.target.value);
								}}
								fullWidth={true}
								label="Observación"
							/>
						</Grid>
						<Grid item md={6} xs={6}>
							<Autocomplete
								options={context.usu}
								onChange={(e, a) => {
									seteditUsuario(a !== null ? a.id : '');
								}}
								getOptionLabel={(option) => option.codusuario + '-' + option.usuario}
								renderInput={(params) => <TextField {...params} label="Laboratorio" />}
							/>
						</Grid>
						<Grid item xs={6} md={2}>
							<Button
								variant="contained"
								fullWidth
								size="medium"
								color="primary"
								style={style.submit}
								onClick={onEditSubmit.bind(this, data['data'].id)}
							>
								Guardar
							</Button>
						</Grid>
						<Grid item xs={2} md={2}>
							<Button
								variant="contained"
								fullWidth
								size="medium"
								color="secondary"
								style={style.submit}
								onClick={historyBack}
							>
								Cancelar
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
}

export default DetallesLaboratorio;
