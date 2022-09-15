// importaciones de libreria
import ReactDOM from "react-dom/client";

// si nos aparece el error de scope ponemos: import React form 'react';

// nuestros componentes
import App from './App';

import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/>);