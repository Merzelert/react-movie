import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";

ReactDOM.render(
    <App/>,
    document.getElementById('root'));
    


// function Componente ({titulo, children}) { // Siempre se escriben con mayuscula el Componente.
//     // - Hacemos destructuring con los valores del Componente titulo y por medio del children le pasamos el contenido 
//     return (
//     <div>
//         <h1>{titulo}</h1>
//         <div>{children}</div>
//     </div>
//     )
// }

// ReactDOM.render(
// <Componente titulo="Nuevo Titulo">Hola desde React</Componente>, //El contenido dentro del componente es el children
// document.getElementById('root'));
