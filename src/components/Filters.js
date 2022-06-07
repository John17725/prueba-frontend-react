import React,{useState,useEffect} from 'react'
import './Filters.css';
import {Loading} from './Loading'
function Filters(props) {
    const [optionCategory, setOptionCategory] = useState([]);
   
    if(props.filters.length == 0){
        console.log('iu',props.filters.length,props);
    }else{
      
        return (
            <div className="container container-filter">
                <h4 className="title-filter">Filtrar busqueda</h4>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Precio minimo:</label>
                        <input type="text" className="form-control" htmlFor="price_min" id="price_min"/>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Precio maximo:</label>
                        <input type="text" className="form-control" htmlFor="price_max" id="price_max"/>
                    </div>
                    <div className="mb-3 form-label">
                        <label className="form-check-label">Categorias</label>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setOptionCategory(e.target.value)}>
                            <option value="">---</option>
                            {props.filters.data[5].options.map((option)=>(
                                <option value="">{option.text}</option>
                            ))}
                        </select>
                    </div>
                    <input type="text" className="form-control hidden" id="exampleInputEmail1" placeholder='hidden' aria-describedby="emailHelp"/>
                    <button type="submit" className="btn btn-primary mt-4">Buscar</button>
                </form>
            </div>
        )
    } 
}

export {Filters};
