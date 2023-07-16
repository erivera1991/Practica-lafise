import React from "react";
import '../style/Prueba.css';
import imagen from '../Imagenes/logo.png';
import busca from '../Imagenes/buscador.png';
import baner from '../Imagenes/banner.jpeg';
import banca from '../Imagenes/banca.jpeg'


   function MyApp() {
    return (
      <div> 

        <nav className="menu">
        

        <ul>
    <li><a href="#"> Contactanos</a></li>
    <li><a href="#">Encuentranos</a></li>
    <li>   <button> 
      <img src={busca} ></img>
    </button></li>
    <li>   
      <button> 
      <img src={banca} width={200}height={50}></img>
    </button></li>
    </ul>

    </nav>
    <div className="nav2">
      <img src={imagen} width={250}height={100} >
      </img>
    </div>

    <div className="banner">
    <img src ={baner}></img>
    </div>


    <div className="Container">

      <div className="Container1">
        <div className="row">
          <div className="col-6">
            <h1>Abra su cuenta de Ahorro con Banco LAFISE</h1>
            <h3>Complete sus datos y solicítela fácilmente, le tomará solo 10 minutos ¡Sin filas y sin salir de su casa!</h3>
            <input type="text" value="Primer Nombre" ></input>
       <input type="text" value="Segundo Nombre" ></input>
       <div className="col-6">
       <input type="text" value="Primer Apellido" ></input>
       <input type="text" value="Segundo Apellido" ></input>

       </div>

       <div className="col-6">
         <h6>Email *</h6>
         <input type="text" value="" ></input>

       </div>

       <div className="col-6">
         <h6>Telefono *</h6>
         <input type="text" value="" ></input>
       </div>



       <div className="col-6">
      
        <button>
          <h3>Quiero abrir mi cuenta</h3>
          </button>
       </div>



          
          </div>
        </div>
      </div>

      <div className="Container2">
        <div className="row">
          <div className="col-6">
            <h1>Beneficios de su nueva cuenta LAFISE</h1>
          </div>
        </div>
      </div>

     
    </div>



  
  

    </div>



      
    );


  }

  export default MyApp;