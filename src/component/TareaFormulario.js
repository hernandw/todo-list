import '../css/TareaFormulario.css'
import { useState } from 'react';

const TareaFormulario = (props) => {
    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value)
        console.log(e.target.value);
    }

const manejarEnvio = e => {
    e.preventDefault();
    console.log('Enviando Formulario');
    const nuevaTarea = {
        id: '3455',
        texto: input,
        completada: false
    }
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