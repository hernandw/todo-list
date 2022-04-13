import TareaFormulario from "./TareaFormulario"
import '../css/ListaDeTareas.css'
import { useState } from "react"
import Tareas from "./Tareas"


const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = (id) =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){

                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas)
    }

    return (
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tarea-lista-container">
           {
               tareas.map((tarea) =>
                   <Tareas
                   key={tarea.id}
                   id={tarea.id}
                   texto={tarea.texto}
                   completada={tarea.completada}
                   eliminarTarea={eliminarTarea}
                   completarTarea={completarTarea} 
                   />
               )
           }
        </div>
        </>
    );
}

export default ListaDeTareas;