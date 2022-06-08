import React, {useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {Filters} from './components/Filters';
import {Card} from './components/Card';
import {Loading} from './components/Loading';
import './App.css'


function App(props) {
  var iteratorCards = 0;
  var wait = true;
  const [items, setItems] = useState(null);
  const urlItems = ' https://nowaii-devtest.s3.us-west-2.amazonaws.com/detalle_items.json';
  const urlAPI = 'https://nowaii-devtest.s3.us-west-2.amazonaws.com/detallado_categorias.json';
  const [filter, setFilter] = useState(null);
  const fetchContent = (urlAPI) => {
  fetch(urlAPI)
      .then((response) => response.json())
      .then(data => {
        setTimeout(() => {
          setFilter(data)
        }, 1200);
          // console.log('filter',data.data);
        })
        .catch((error) =>console.log(error))
  };
  const getDataByCategoria = (e) => {
    setItems(null);
    setFilter(null);
    setTimeout(() => {
      fetchContent(urlAPI);
      fetchItems(urlItems);
    }, 400);
    
  }
  function getData(){
    setItems(null);
    setTimeout(() => {
      fetchItems(urlItems);
    }, 400);
  }
  const fetchItems = (urlItems) =>{
    fetch(urlItems)
    .then(response => response.json())
    .then(items => {
      setTimeout(() => {
        setItems(items.data)
      }, 1200);
      // console.log('ITEEEEEMS',items)
    })
    .catch((error) =>console.log(error))
  };
  useEffect(() => {
    fetchContent(urlAPI);
    fetchItems(urlItems);
  }, [])
  
  return (
    <React.Fragment>
      <Navbar brand="TestApi"/>
      <div className="container main-layout">
          <h1 className="">hola{props.Color}</h1>
          <div className="row">
            <div className="col-3 container-filters">
            <div>
              {
                filter ? // if dogs.url is not null JSON object
                  <>
                    <Filters handleSearch={getDataByCategoria} filters={filter}/>
                  </>
                  : // Render Until API call is complete
                  <>
                    <Loading/>
                  </>
              }
            </div>
            </div>
            <div className='container-fluid container-grid'>
              <div className='row'>
              {
                items ? 
                  <>
                    {items.map((item) => (
                      <div className='col-xs-12 col-md-4 col-sm-2'>
                        <Card key={iteratorCards++} item={item}/>
                      </div>
                    ))}
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item"><button className="page-link" onClick={getData}>Previous</button></li>
                        <li className="page-item"><button className="page-link" onClick={getData}>1</button></li>
                        <li className="page-item"><button className="page-link" onClick={getData}>2</button></li>
                        <li className="page-item"><button className="page-link" onClick={getData}>3</button></li>
                        <li className="page-item"><button className="page-link" onClick={getData}>Next</button></li>
                      </ul>
                    </nav>
                  </>
                  : // Render Until API call is complete
                  <>
                    <Loading/>
                  </>
              }
                
              </div>
            </div>
          </div>
          
      </div>
    </React.Fragment>
  );
}

export default App;
