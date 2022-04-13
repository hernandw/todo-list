import TareaFormulario from "./TareaFormulario"
import '../css/ListaDeTareas.css'


const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([])
    return (
        <>
        <TareaFormulario />
        <div className="tarea-lista-container">
           {
               tareas.map((tarea) =>{
                   <Tareas
                   texto={tarea.texto}
                   completada={tarea.completada} 
                   />
               })
           }
        </div>
        </>
    )
}

export default ListaDeTareas;