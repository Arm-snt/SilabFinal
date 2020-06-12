import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DialogTitle, Dialog, DialogContent, DialogActions, Button,} from "@material-ui/core";
import { TodoContext } from "./TodoContext";

function DeleteDialog(props) {
  const context = useContext(TodoContext);
  let estado = 'Activo';
  let titulo = '¿Desea cambiar el responsable del laboratorio?';
  let contenido = 'Esto permitira reasignar un usuario al laboratorio: ';
  let update = {};

  if(props.todo.codusuario){
    titulo = "¿Dese cambiar el estado del usuario?";    
    contenido = 'Esto permitira cambiar el estado del usuario: ';
    if(props.todo.estado == estado){
      estado = 'Inactivo';
    }
    update = {
      id: props.todo.id,
      usuario: props.todo.usuario,
      codusuario: props.todo.codusuario,
      nombre: props.todo.nombre,
      apellido: props.todo.apellido,
      correo: props.todo.correo,
      password: props.todo.password,
      telefono: props.todo.telefono,
      tipousuario: props.todo.tipousuario,
      estado: estado,
    };
  } else {
    update = {
      id: props.todo.id,
      codlaboratorio: props.todo.codlaboratorio,
      nombre: props.todo.nombre,
      observacion: props.todo.observacion,
      ubicacion:props.todo.ubicacion,
      usuario_id: null,
    }
  }


  const hide = () => {
    props.setEliminarVisible(false);
  };  

  return (
    <Dialog onClose={hide} fullWidth={true} maxWidth="sm" open={props.open}>
      <DialogTitle>{titulo}</DialogTitle>
      <DialogContent>{contenido+props.todo.nombre}</DialogContent>
      <DialogActions>
        <Button onClick={hide}>Cancelar</Button>
        <Button
          onClick={() => {
            if(update.codusuario){
              context.updateTodo(update);
            } else {
              context.updateLaboratorio(update);
            }
            hide();
          }}>
          Cambiar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setEliminarVisible: PropTypes.func.isRequired,
  todo: PropTypes.object
};

export default DeleteDialog;