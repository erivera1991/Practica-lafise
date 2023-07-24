import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Home from './component/Root';
import Contact from './component/contact';
import reportWebVitals from './reportWebVitals';
import Producto from './component/Producto';



const router = createBrowserRouter([
 {
  path: "/",
   element:<Home/>
 },
 {
  path:"contact/:id",
  element:<Contact/>
},

{
  path:"Productos",
  element:<Producto/>
}



])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
