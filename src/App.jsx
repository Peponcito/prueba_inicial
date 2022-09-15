import {useState } from "react";
import Introducir from "./Components/Introducir";
import Listado from "./Components/Listado";
const App = () => {

  const[datosLista, setDatosLista] = useState({
    cosa: '',
  });

  return (
    <>
    <Listado datosLista = {datosLista} setDatosLista = {setDatosLista}/>
    <Introducir datosLista = {datosLista} setDatosLista = {setDatosLista}></Introducir>
    </>
  )
};

export default App;