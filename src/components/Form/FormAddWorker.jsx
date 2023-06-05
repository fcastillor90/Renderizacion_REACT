import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import { input } from '../Input';
import "./FormAddWorker.css";
import { useState } from 'react';
import input from "../Input/Input"

function FormAddWorker({onClickAddWorker}) {
  const [nombre,setNombre] = useState ()
  const [correo, setCorreo] = useState ()

const handlerOnClick = () =>{
  onClickAddWorker({
    nombre:nombre,
    correo: correo,
  })
}

  return (
    <>
      <input type="text" 
      placeholder="Nombre Trabajador" 
      className='form__input'
      onChangeInput={(e) => setNombre(e.target.value)}
      />
      <div></div>
      <input type="text" 
      placeholder="Correo Trabajador" 
      className='form__input'
      onChangeInput={(e) => setCorreo(e.target.value)}
      />
      <div></div>
      <Button variant="primary" onClick={handlerOnClick}>Agregar Colaborador</Button>
    </>
  );
}

export default FormAddWorker;