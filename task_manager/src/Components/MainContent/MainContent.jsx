import React,{useState} from 'react'
import ListTask from '../ListTask/ListTask.jsx'
import shortid from 'shortid' 

const MainContent = () => {

    const [taskName,setTaskName] = useState('')
    const [taskDes,setTaskDes] = useState('')
    const [listTask,setListTask] = useState([])
    
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

    return (
        <div className="container pt-5">
            <div className="row"> 
                <div className="col-8">
                    <ul className="list-group">
                        {
                            listTask.map(item =>(
                                <li className="list-group-item border-0">
                                    <ListTask nombre={item.nametask} descripcion={item.description}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="col-4">
                <div className="card text-light bg-dark mb-3 text-center">
                <div className="card-header">Agregar Nueva Tarea</div>
                    <form className="card-body" onSubmit={addTask}>
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
                            <button type="submit" className="btn btn-outline-success btn-block">Aceptar</button>
                            <button type="button" className="btn btn-outline-danger btn-block">Cancelar</button>
                        </div>
                    </form>
            </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
