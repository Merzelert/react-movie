import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App"; //Aqui importamos desde ./App  con la esta sintaxis 

ReactDOM.render(
    <App/>,
    document.getElementById('root')); // Aqui renderisamos App desde App.jsx en nuestro root dentro de index.html
    


// function Componente ({titulo, children}) { // Siempre se escriben con mayuscula el Componente.
//     // - Hacemos destructuring con los valores del Componente titulo y por medio del children le pasamos el contenido 
//     return (
//     <div className="contenedor"> las clases en react se agregan como className para no entrar en conflicto con class que es palabra reservada en html
//         <h1>{titulo}</h1>
//         <div>{children}</div>
//     </div>
//     )
// }

// ReactDOM.render(
// <Componente titulo="Nuevo Titulo">Hola desde React</Componente>, //El contenido dentro del componente es el children
// document.getElementById('root'));
