import React from 'react'

function Result({data = []}) {
  return (
    <div className="row">
        {
            data.map((item, index) =>(
                <div key={index} className="col">
                    <div className="card">
                        img
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export {Result};
