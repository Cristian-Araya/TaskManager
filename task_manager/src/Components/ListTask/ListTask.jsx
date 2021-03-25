import React from 'react'


const ListTask = (props) => {
    return (
        <div class="card bg-dark text-white">
        <div class="card-header border-white">
          {props.nombre}
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.descripcion}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button type="button" className="btn btn-danger float-right mr-3">Eliminar</button>
            <button type="button" className="btn btn-warning float-right mr-3">Editar</button>      
        </div>
      </div>
    )
}

export default ListTask
