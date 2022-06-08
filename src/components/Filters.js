import React,{useState,useEffect} from 'react'
import './Filters.css';
import {Loading} from './Loading'
function Filters(props) {
    const {colorForm,setColorForm} = useState("");
    var iteratorItems = 0;
    const [color, setColor] = useState("");
    const [minprice, setMinprice] = useState("");
    const [maxprice, setMaxprice] = useState("");
    const {handleSearch} = props;
    const [optionCategory, setOptionCategory] = useState([]);
    const [items, setItems] = useState([]);
    function onAmountChange(e) {
        var patt = new RegExp(/^\d{1,10}(\.\d{1,4})?$/);
        const amount = e.target.value;
        
        console.log( patt.test(amount) ); 
      };
    if(props.filters.length == 0){
        console.log('iudsadsdssd',props.filters.length,props);
    }else{
      
        return (
            <div className="container container-filter">
                <h4 className="title-filter">Filtrar busqueda</h4>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>setColor(e.target.value)} placeholder="Rojo, verde..."/>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Precio minimo:{color}</label>
                        <input type="number" className="form-control" htmlFor="price_min" id="price_min" onChange={e => setMinprice(e.target.value)}/>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Precio maximo:</label>
                        <input type="number" className="form-control" htmlFor="price_max" id="price_max" onChange={e => setMaxprice(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-label">
                        <label className="form-check-label">Categorias</label>
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setOptionCategory(e.target.value)}>
                            <option value="">---</option>
                            {props.filters.data[5].options.map((option)=>(
                                <option key={iteratorItems++} value={option.text}>{option.text}</option>
                            ))}
                        </select>
                    </div>
                    <input type="text" className="form-control-hidden" id="exampleInputEmail1" placeholder='hidden' aria-describedby="emailHelp"/>
                </form>
            </div>
        )
    } 
}

export {Filters};
