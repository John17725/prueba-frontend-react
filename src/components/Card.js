import React from 'react'
import './Card.css';

function Card ({props}) {
  return (
    <div>
        <div className="card">
            <div className="imgContainer">
                <img src="https://http2.mlstatic.com/D_NQ_NP_956694-MLM50173824439_062022-O.webp" className="card-img-top" alt="camion"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export {Card};