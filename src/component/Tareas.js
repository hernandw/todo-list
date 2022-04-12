import '../css/Tareas.css'
import { AiOutlineCloseCircle }  from "react-icons/ai"

const Tareas = ( { texto, completada }) => {
    return (
    <div className={completada ? 'container-tarea completada' : 'container-tarea'}>
            <div className="tarea-text">
                { texto }
            </div>
            <div className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className='tarea-icon' />
            </div>

        </div>
    )
}

export default Tareas;