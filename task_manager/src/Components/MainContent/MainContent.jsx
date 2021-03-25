import React,{useState} from 'react'
import shortid from 'shortid'


const MainContent = () => {

 
    const [taskName,setTaskName] = useState('')
    const [taskDes,setTaskDes] = useState('')
    const [listTask,setListTask] = useState([])
    const [modoEdicion,setModoEdicion] = useState(false)
    const [id,setId] = useState('')
    
    const addTask = e => {
        e.preventDefault()
        if(!taskName.trim()){
            console.log('Falta una Nombre')
            return
        }
        if(!taskDes.trim()){
            console.log('Falta una Descripcion')
            return
        }
        setListTask([
            ...listTask, 
            {
                id: shortid.generate(), nametask:taskName, description:taskDes,
            }
        ])


        setTaskName('')
        setTaskDes('')
    }
    const cancelNewTask = (e) => {
        setTaskName('')
        setTaskDes('')
    }
    const removeTask = (id) => { 
        const arrayfiltrado = listTask.filter(item => item.id !== id)
        setListTask(arrayfiltrado);
    }
    const Edicion = (item) => {
        console.log(item)
        setModoEdicion(true)
        setTaskName(item.nametask)
        setTaskDes(item.description)
        setId(item.id)
    }
    const editTask = (e) => {
        e.preventDefault()
        if(!taskName.trim()){
            console.log('Falta una Nombre')
            return
        }
        if(!taskDes.trim()){
            console.log('Falta una Descripcion')
            return
        }
        const arrayEditado = listTask.map(
            item => item.id === id ? {id,nametask:taskName,description:taskDes}:item)
            setListTask(arrayEditado)
            setModoEdicion(false)
            setTaskName('')
            setTaskDes('')
    }
    return (
        <div className="container pt-5 pb-5">
            <div className="row"> 
                <div className="col-md-8 col-sm-10">
                        <ul className="list-group">
                            {
                                listTask.map(item=>(
                                    <li className="list-group m-3" key={item.id}>
                                        <div className="card text-dark border border-success border-5">
                                            <div className="card-header bg-dark text-light border-bottom border-success">
                                                {item.nametask}
                                            </div>
                                            <div className="card-body m-2">
                                                <p className="card-text">{item.description}</p>
                                                <button 
                                                onClick={()=>removeTask(item.id)}
                                                className="btn btn-danger float-right mx-3">
                                                    Eliminar
                                                </button>
                                                <button 
                                                onClick={()=>Edicion(item)}
                                                className="btn btn-warning float-right">
                                                    Editar
                                                </button>
                                            </div>
                                            </div>
                                    </li>
                                ))
                            }
                               
                        </ul>
                </div>
                <div className="col-md-4 col-sm-10">
                    
                        <div className="card text-light bg-dark mb-3 text-center">
                            {
                                modoEdicion ? (
                                    <div className="card-header">Editando Tarea</div>
                                    
                                ):
                                (
                                    <div className="card-header">Agregar Nueva Tarea</div>
                                )
                            }
                            <form className="card-body" onSubmit={modoEdicion ? editTask : addTask}>
                                <div>
                                    <input type="text" 
                                    placeholder="Nombre de la tarea" 
                                    className="form-control mb-3"
                                    onChange={ e => setTaskName(e.target.value)}
                                    value={taskName}
                                    />

                                    <input type="text" 
                                    placeholder="Descripcion de la tarea" 
                                    className="form-control mb-3"
                                    onChange={ e => setTaskDes(e.target.value)}
                                    value={taskDes}
                                    />
                                </div>
                                <div>
                                    {
                                        modoEdicion ?
                                        (<button type="submit" className="btn btn-outline-warning btn-block">Editar</button>
                                        ):
                                        (<button type="submit" className="btn btn-outline-success btn-block">Aceptar</button>
                                        )
                                    }
                                    <button type="button" 
                                    onClick={e => cancelNewTask()}
                                    className="btn btn-outline-danger btn-block">Cancelar</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
