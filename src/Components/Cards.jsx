import React, { Component } from 'react';

import './Cards.css'
function Card(props) {
    console.log(props)
    return ( 
        <div className='mycard'>
        <h5 className="card-title">{props.card.name}{" "}<span className="badge bg-primary">{props.card.completed}</span></h5>
        <p className="card-text"><strong>Total Questions:{" "}</strong>{props.card.total}</p>
        <a href="#" className="btn btn-success">Practice</a>
        </div>
   );
}

export default Card;