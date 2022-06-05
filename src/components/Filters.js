import React from 'react'
import './Filters.css';
function Filters({title}) {
  return (
    <div className="container container-filter">
        <h5 className="title-filter">Filtrar busqueda</h5>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>Text</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export {Filters};
