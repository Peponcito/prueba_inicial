import PropTypes from "prop-types";
const Introducir = ({datosLista, setDatosLista}) => {
    const Borrar = () =>{
        setDatosLista({
            cosa: ''
        });
    }
    return (
        <>
        <h4>TaskList</h4>
        <div>
            <div className="MostrarLista">
            {datosLista.cosa}
            <p>
                <button className="botonDelete" onClick={Borrar}>Delete all done</button>
            </p>
            </div>
        </div>
        </>
    );
};
Introducir.propTypes ={
    datosLista: PropTypes.object.isRequired
    }
    Introducir.propTypes ={
    setDatosLista: PropTypes.func.isRequired
    }
export default Introducir;