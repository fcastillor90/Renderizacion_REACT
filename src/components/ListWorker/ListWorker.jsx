import React, { useState } from 'react'
//import { lista } from '../../Lista'

const ListWorker = ({lista}) => {
    //const [listaColab, setListaColab] = useState(lista);
    //console.log(listaColab);

  return (
    <div>
        <h1>Lista de Colaboradores</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                    {lista.map((index)=> (
                    <tr key={index.id}>
                        <td>{index.id}</td>
                        <td>{index.nombre}</td>
                        <td>{index.correo}</td>
                    </tr>
                    ))}
                
            </tbody>
        </table>
    </div>
  ) 
}

export default ListWorker

