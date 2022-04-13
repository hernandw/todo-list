import '../css/TareaFormulario.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (props) => {
    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value)
        
    }

const manejarEnvio = e => {
    e.preventDefault();
    
    const nuevaTarea = {
        id: uuidv4(8),
        texto: input,
        completada: false
    }
    props.onSubmit(nuevaTarea);
}

    return (
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}
        >
            <input 
            className="tarea-input"
            type='text'
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>

        </form>
    )
}

export default TareaFormulario;