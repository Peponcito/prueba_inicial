import PropTypes from "prop-types";
import { useState } from "react";
const Listado = ({datosLista, setDatosLista}) => {
    const initLista = {
        cosa: datosLista.cosa
    };
    const [ form, setFormState] = useState(initLista);
    const handleInputChange = (e) => {
        setFormState({
        ...form,
        [e.target.name]:
        e.target.type === 'checkbox'
        ? e.target.checked : e.target.value
        });
    } ;
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setDatosLista(form);
    }
    return (
        <>
        <h4>My TaskList App!!!</h4>
        <div className="CajaPadre">
            <div className="Caja">
                <input
                type="text"
                id="cosa"
                name="cosa"
                onChange={handleInputChange}></input>
                <p>
                <button className="botonAdd" onClick={handleSubmit}>Add</button>
                </p>
            </div>
        </div>
        </>
    );
};
Listado.propTypes ={
    datosLista: PropTypes.object.isRequired
    }
Listado.propTypes ={
    setDatosLista: PropTypes.func.isRequired
    }
export default Listado;