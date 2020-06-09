import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { TodoContext } from './TodoContext';

function DeleteDialog(props) {
	const context = useContext(TodoContext);

	const hide = () => {
		props.setDeleteConfirmationIsShown(false);
	};

	return (
		<Dialog onClose={hide} fullWidth={true} maxWidth="sm" open={props.open}>
			<DialogTitle>¿Desea eliminar este registro?</DialogTitle>
			<DialogContent>{props.todo.elemento}</DialogContent>
			<DialogActions>
				<Button onClick={hide}>Cancelar</Button>
				<Button
					onClick={() => {
						context.updateElemento({
							id: props.todo.id,
							laboratorio_id: null,
							elemento: props.todo.elemento,
							codelemento:props.todo.codelemento,
							stock:props.todo.stock,
							horauso:props.todo.horauso,
							categoria:props.todo.categoria,
							estado:props.todo.estado,
						});
						hide();
					}}
				>
					Eliminar
				</Button>
			</DialogActions>
		</Dialog>
	);
}

DeleteDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	setDeleteConfirmationIsShown: PropTypes.func.isRequired,
	todo: PropTypes.object
};

export default DeleteDialog;
