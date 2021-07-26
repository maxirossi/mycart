import React, { useState } from 'react';
import './Content.css';
import Item from './Item';

function Content(props) {
    return (
      <div className="app-content container">
      Cantidad de productos : {props.items.length}
      <hr/>
       { props.items.map((item) => {
           return (
            <ul className="items">
              <li>
                <Item id={item.id} title={item.title} price={item.price} photo={item.photo} evento={props.evento} />
              </li>
            </ul>
           )
       })}
       <div className="clear"></div>
      </div>
    );
}
  
export default Content;

