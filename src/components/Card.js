import React from 'react'
import './Card.css';

function Card (props) {
    const urlSlug = 'https://www.google.com.mx/search?q='+props.item.slug;
    return (
    <div>
        <div className="card">
            <div className="imgContainer">
                <img src={props.item.image} className="card-img-top" alt="camion"/>
            </div>
            <div className="card-body">
                <div className="card-details">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p>{props.item.marketplace}</p>
                    <p>{props.item.item_price} MXN</p>
                    <p className="card-text">{props.item.usd_price} USD</p>
                </div>
                <div className="card-like">
                    <p>{props.item.likes} Likes</p>
                <a href={urlSlug} className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export {Card};