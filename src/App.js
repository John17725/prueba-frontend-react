import React, {useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {Filters} from './components/Filters';
import {Card} from './components/Card';
import {Loading} from './components/Loading';
import './App.css'


function App(props) {
  const [loading, setLoading] = useState([]);
  const [items, setItems] = useState([]);
  const urlItems = ' https://nowaii-devtest.s3.us-west-2.amazonaws.com/detalle_items.json';
  const urlAPI = 'https://nowaii-devtest.s3.us-west-2.amazonaws.com/detallado_categorias.json';
  const [filter, setFilter] = useState([]);
  const fetchContent = (urlAPI) => {
  fetch(urlAPI)
      .then((response) => response.json())
      .then(data => {
          // alert(data.error)
          
          setLoading(true);
          setFilter(data)
          console.log('filter',data.data);
        })
        .catch((error) =>console.log(error))
  };
  const fetchItems = (urlItems) =>{
    fetch(urlItems)
    .then(response => response.json())
    .then(items => {
      console.log(items)
      setItems(items.data)
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
          <div className="row">
            <div className="col-3 container-filters">
              {/* {loading ? filter : <Loading />}  */}
            <Filters filters={filter}/>
            </div>
            <div className='container-fluid container-grid'>
              
              <div className='row'>
                {items.map((item,index) => (
                    <div className='col-xs-12 col-md-4 col-sm-2'>
                      <Card key={item.slug} item={item}/>
                    </div>
                ))}
              </div>
            </div>
          </div>
          
      </div>
    </React.Fragment>
  );
}

export default App;
