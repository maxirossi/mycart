import React, { useState } from 'react';
import './Header.css';

function Header(props) {
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // estados locales
    let [desde, desdeUpdate] = useState(0);
    let [hasta, hastaUpdate] = useState(0);
    let [buscar, buscarUpdate] = useState('');

    const sumSubTotal = (cart) => {
       let n = 0;
       cart.forEach((item) => {
            n += parseFloat(item.subtotal);
       });
       return n;
    }

    const sumNItems = (cart) => {
       let n = 0;
       cart.forEach((item) => {
         n += parseFloat(item.nItems);
       });
       return n;
    }

    const filter = () => {
        props.filterByPrice(desde, hasta);
    }

    const actualizarDesde = (e) => {
      let value = e.target.value;
      desdeUpdate(value);
    }

    const actualizarHasta = (e) => {
      let value = e.target.value;
      hastaUpdate(value);
    }

    const actualizarBuscar = (e) => {
      let value = e.target.value;
      buscarUpdate(value);
    }

    const searchProduct = () => {
      let value = buscar;
      props.searchByString(value);
    }

    return (
      <div className="app-header">
        <div className="info-top container">
        <h2>Carrito </h2>
          <h3>Cantidad de items : {sumNItems(props.cartValue)} <br/> Subtotal : ${sumSubTotal(props.cartValue)}</h3>
          <div className="filtros">
          Desde $ <input type="number" value={desde} onChange={actualizarDesde}></input> Hasta $ <input type="number" value={hasta} onChange={actualizarHasta}></input> 
          <input type="button" value="Filtrar" className="btn-filtro" onClick={filter} />
          <br/><br/>
          Buscar : <input type="text" placeholder="Buscar producto" value={buscar} onChange={actualizarBuscar}></input> 
          <input type="button" value="Buscar" className="btn-filtro" onClick={searchProduct} />
        </div>
        </div>
      </div>
    );
}
  
export default Header;


