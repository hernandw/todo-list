import '../css/Tareas.css'
import { AiOutlineCloseCircle }  from "react-icons/ai"

const Tarea = ( { id, texto, completada, completarTarea, eliminarTarea }) => {
    return (
    <div className={completada ? 'container-tarea completada' : 'container-tarea'}>
            <div className="tarea-text"
                onClick={()=>completarTarea(id)}>
                { texto }
            </div>
            <div className="tarea-contenedor-iconos"
            onClick={()=> eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icon' />
            </div>

        </div>
    );
}

export default Tarea;