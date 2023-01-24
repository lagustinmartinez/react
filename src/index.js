import 'core-js/actual';

// let contenedor = document.getElementById("container");
// let productos = [
//     { id: 1, nombre: "chocotorta", precio: 1100 },
//     { id: 2, nombre: "marquise", precio: 1300 },
//     { id: 3, nombre: "cheese cake", precio: 1500 },
//     { id: 4, nombre: "mousse de chocolate", precio: 1700 },
// ];

// for (const producto of productos) {
//     let li = document.createElement("li");
//     li.innerHTML = `<h4>Opcion: ${producto.id}</h4>
//                   <p>Variedad: ${producto.nombre}</p>
//                   <b>$${producto.precio}</b>
//                  `;
//     contenedor.append(li);
// }


// let saludo = document.getElementById("saludo");

// let seccion = prompt("Ingresa la seccion que queres");

// if(seccion === "tortas"){
//     saludo.innerHTML = "<h1> Nuestras tortas</h1>";
//     saludo.className = "cakes";
// }else if(seccion === "tartas"){
//     saludo.innerHTML = "<h1> Nuestras tartas</h1>";
//     saludo.className = "pies";
// }else if(seccion === "budines"){
//     saludo.innerHTML = "<h1> Nuestros budines</h1>";
//     saludo.className = "pudin";
// }else if(seccion === "chocolates"){
//     saludo.innerHTML = "<h1> Nuestros chocolates</h1>";
//     saludo.className = "chocolate";
// }else{
//     saludo.innerHTML = "<h1> Bienvenido a Tentatortas</h1>";
// }
 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log)
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

