import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useSearchParams,useParams} from 'react-router-dom'

function Contacto() {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imagen, setImagen] = useState("");
    const [precio, setPrecio] = useState("");
    const [clasificacion, setClasificacion] = useState("");
    let { id } = useParams();


    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(function (response) {
                console.log(response);
                setCategory(response.data.category)
                setDescription(response.data.description);
                setImagen(response.data.image);
                setPrecio(response.data.price);
                setClasificacion(response.data.rating);
            })
            .catch(function (error) { console.log(error); })
            .finally(function () {
                // always
            });
    }, []);

    const inputHandleChange = (e) => { }



    return (
        < >
            <form>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'> category</label>
                    <div className='col-sm-10'>
                        <input type="text" className="form-control" onChange={inputHandleChange} value={category} />
                    </div>
                </div>
            </form>

            <form>
                <div className='form.group row'>
                    <label className='col-sm-2 col-form-label'> description</label>
                    <div className='col-sm-10'>
                        <input type="text" className="form-control" onChange={inputHandleChange} value={description} />
                    </div>

                </div>
            </form>
            <form>
                <div className='form.group row'>
                    <label className='col-sm-2 col-form-label'> imagen</label>
                    <div className='col-sm-4'>
                        <img className='form-control'  src={imagen} width={5} height={200}/>
                    </div>

                </div>
            </form>

            <form>
                <div className='form.group row'>
                    <label className='col-sm-2 col-form-label'> precio</label>
                    <div className='col-sm-10'>
                        <input type="text" className="form-control" onChange={inputHandleChange} value={precio}/>
                    </div>

                </div>
            </form>
        </>




    );
}
export default Contacto;