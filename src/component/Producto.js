import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";
import contact from './contact';




function Producto() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(()=>{ 
        axios   
        .get("https://fakestoreapi.com/products")
        .then (function (response){
            console.log(response);
            setProducts(response.data)
    })
     .catch (function(error)
   { console.log(error);  })
   
   
   .finally(function(){
   // always
   });
    }, []);

    const handleClick = (e, id) => {
        navigate(`/contact/${id}`)
    }

    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    {products.map(producto => (
                        <div key={producto.id} className="col-4" >
                            <div className="card" >
                                <img className="card-img-top" src={producto.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.category}</h5>
                                    <p className="card-text">{producto.description}</p>
                                    <div>  
                                
                                <button className="button" onClick={event => handleClick(event, producto.id)}>ver detalle</button>
                                  
                        
                                   </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>

    )
}
export default Producto;