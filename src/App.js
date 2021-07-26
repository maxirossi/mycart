import React, { useState } from 'react';

/* components */
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
/* . components */

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

function App() {

  const initialCartState = [{
    id : 0,
    nItems : 0,
    subtotal : 0.00
  }];
  
  const initialItems = [
    {
      id  : 1,
      title : 'Zapatillas X-ray Lite Puma 78 Performance Tienda Oficial',
      price : 1000,
      photo : 'https://http2.mlstatic.com/D_NQ_NP_874960-MLA45004150134_022021-O.webp',
    },
    {
      id  : 2,
      title : 'Zapatillas Fila Sparky 0630 Dash',
      price : 2500,
      photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_965173-MLA45308278044_032021-F.webp',
    },
    {
        id  : 3,
        title : 'Zapatilla Blanca Puma X-ray Square Rainbow',
        price : 9999,
        photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_939857-MLA45656396087_042021-F.webp'
    },
    {
      id  : 4,
      title : 'Zapatillas adidas Galaxy 5 1522',
      price : 5000,
      photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_934071-MLA43469133339_092020-F.webp'
  },
  {
    id  : 5,
    title : 'Zapatillas Galaxy 5 adidas Team Sport Tienda Oficial',
    price : 7499,
    photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_909663-MLA46362157729_062021-F.webp'
},
{
  id  : 6,
  title : 'Zapatillas X-ray Lite Puma 78 Performance Tienda Oficial',
  price : 100,
  photo : 'https://http2.mlstatic.com/D_NQ_NP_874960-MLA45004150134_022021-O.webp',
},
{
  id  : 7,
  title : 'Zapatillas Fila Sparky 0630 Dash',
  price : 4990,
  photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_965173-MLA45308278044_032021-F.webp',
},
{
    id  : 8,
    title : 'Zapatilla Blanca Puma X-ray Square Rainbow',
    price : 9999,
    photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_939857-MLA45656396087_042021-F.webp'
},
{
  id  : 9,
  title : 'Zapatillas adidas Galaxy 5 1522',
  price : 7499,
  photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_934071-MLA43469133339_092020-F.webp'
},
{
id  : 10,
title : 'Zapatillas Galaxy 5 adidas Team Sport Tienda Oficial',
price : 7499,
photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_909663-MLA46362157729_062021-F.webp'
},
{
  id  : 11,
  title : 'Zapatillas X-ray Lite Puma 78 Performance Tienda Oficial',
  price : 1000,
  photo : 'https://http2.mlstatic.com/D_NQ_NP_874960-MLA45004150134_022021-O.webp',
},
{
  id  : 12,
  title : 'Zapatillas Fila Sparky 0630 Dash',
  price : 2500,
  photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_965173-MLA45308278044_032021-F.webp',
},
{
    id  : 13,
    title : 'Zapatilla Blanca Puma X-ray Square Rainbow',
    price : 9999,
    photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_939857-MLA45656396087_042021-F.webp'
},
{
  id  : 14,
  title : 'Zapatillas adidas Galaxy 5 1522',
  price : 5000,
  photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_934071-MLA43469133339_092020-F.webp'
},
{
id  : 15,
title : 'Zapatillas Galaxy 5 adidas Team Sport Tienda Oficial',
price : 7499,
photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_909663-MLA46362157729_062021-F.webp'
},
{
id  : 16,
title : 'Zapatillas X-ray Lite Puma 78 Performance Tienda Oficial',
price : 100,
photo : 'https://http2.mlstatic.com/D_NQ_NP_874960-MLA45004150134_022021-O.webp',
},
{
id  : 17,
title : 'Zapatillas Fila Sparky 0630 Dash',
price : 4990,
photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_965173-MLA45308278044_032021-F.webp',
},
{
id  : 18,
title : 'Zapatilla Blanca Puma X-ray Square Rainbow',
price : 9999,
photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_939857-MLA45656396087_042021-F.webp'
},
{
id  : 19,
title : 'Zapatillas adidas Galaxy 5 1522',
price : 7499,
photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_934071-MLA43469133339_092020-F.webp'
},
{
id  : 20,
title : 'Zapatillas Galaxy 5 adidas Team Sport Tienda Oficial',
price : 7499,
photo : 'https://http2.mlstatic.com/D_NQ_NP_2X_909663-MLA46362157729_062021-F.webp'
},
];

  let [cart, updateCart] = useState(initialCartState);
  let [items, updateItems] = useState(initialItems);

  const updateGlobalStateCart = (id,  nItems, subtotal) => {
    const newItem = {
     id : id,
     nItems : nItems,
     subtotal : subtotal
    };
    let itemExist = false;
    let actualCart = cart.map((item) => {
      if (item.id === id){
        itemExist = true;
        item.id = id;
        item.subtotal = subtotal;
        item.nItems = nItems;
      }
      return item;
    });
    if (!itemExist){
      actualCart.push(newItem);
    }
    updateCart(actualCart);
  };

  const filterProductsByPrice = (desde, hasta) =>  {
    if (desde < 0 || hasta < 0){
      return;
    }
    if (desde > hasta){
      return;
    }
    if (!isNaN(desde) && !isNaN(hasta) && desde != '' && hasta != ''){
      let actualItems = initialItems.filter((item) => {
        if (parseInt(item.price) >= desde && item.price <= parseInt(hasta)){
          return item;
        }
      });
      updateItems(actualItems);
    }else{
      let actualItems = initialItems.filter((item) => {
        if (parseInt(item.price) >= 0 && item.price <= 999999){
          return item;
        }
      });
      updateItems(actualItems);
    }
  }

  const searchItems = (value) => {
    let actualItems = initialItems.filter((item) => {
      if (item.title.toLowerCase().indexOf(value.toLowerCase()) > -1){
        return item;
      }
    });
    updateItems(actualItems);
  }

 

  return (
    <div>
      <Header cartValue={cart} filterByPrice={filterProductsByPrice} searchByString={searchItems} />
      <Content evento={updateGlobalStateCart} items={items} />
      <Footer />
    </div>
  );
}

export default App;
