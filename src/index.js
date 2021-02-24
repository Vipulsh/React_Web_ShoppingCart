import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductList from './ProductList';


const element = <h1>First element</h1>; //jsx which gets converted to plain javascript

//ReactDOM.render(element,document.getElementById('root'));//div root is acting as a container here.

//ReactDOM.render(<Product Name="One Plus 7" Price={40000} CategoryName="MobilePhone"></Product>,document.getElementById('root'));
//or an element can be created and passed in place of product.


ReactDOM.render(<ProductList></ProductList>,document.getElementById('root'));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
