import React from 'react'

function Result({data = []}) {
  return (
    <div className="row">
        {
            data.map((item, index) =>(
                <div key={index} className="col">
                    <div className="card">
                        
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export {Result};
