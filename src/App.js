import React, {useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {Result} from './components/Result';
import {Filters} from './components/Filters';
import {Card} from './components/Card';
import './App.css'

function App(props) {
  const [data, setData] = useState([]);
  const urlAPI = 'https://nowaii-devtest.s3.us-west-2.amazonaws.com/detallado_categorias.json';
  const fetchContent = (urlAPI) => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then(data => setData(data.data))
      .catch((error) =>console.log(error))
  };
  useEffect(() => {
    fetchContent(urlAPI);
  }, [])
  
  return (
    // <React.Fragment>
    //   <Navbar brand="TestApi"/>
    //   <div className="container">
    //     <Result data={data}/>
    //   </div>
    // </React.Fragment>
    <React.Fragment>
      <Navbar brand="TestApi"/>
      <div className="container main-layout">
          <div className="row">
            <div className="col-3 container-filters">
              <Filters title="Filters"/>
            </div>
            <div className='container-fluid container-grid'>
              <div className='row'>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
                  <div className='col-xs-12 col-md-4 col-sm-2'>
                    <Card/>
                  </div>
              </div>
            </div>
          </div>
          
      </div>
    </React.Fragment>
  // <React.Fragment>
  //   <Navbar brand="TestApi"/>

  // </React.Fragment>
  );
}

export default App;
