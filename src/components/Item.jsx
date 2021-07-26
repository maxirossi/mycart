import React, { useState } from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item(props) {

    let [nItems,setNitems] = useState(0);
    let [nSubtotal,setSubtotal] = useState(0);

    const updateNitems = (e) => {
        let value = e.target.value;
        if (isNaN(value) || value == ''){
            value = 0;
        }
        if (parseInt(value) >= 0){
            setNitems(value);
            setSubtotal(value * props.price);
            props.evento(props.id, value, (value * props.price));
        }
    }

    return (
        <div className="card app-item">
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6>Código del producto : {props.id} </h6>
            <img className="card-img-top app-item-image" src={props.photo} alt={props.title} />
            <p className="card-text search-options">
            Precio : $ {props.price} <br/>
                <input type="number" min="0" max="999999" onChange={updateNitems}></input> <br/>
                Cantidad : {nItems} <br/>
                Subtotal : $ { nSubtotal } <br/>
            </p>
            </div>  
        </div>
    );
}
  
export default Item;

