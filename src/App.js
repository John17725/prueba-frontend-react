import React, {useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {Result} from './components/Result';

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
    <div className="container">
        <div className="row">
          <div className="col-3 bg-primary">
            uno
          </div>
          <div className="col">
            <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
            </div>
            <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
            </div>
            <div className="row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
            </div>
          </div>
        </div>
    </div>
  </React.Fragment>
  );
}

export default App;
