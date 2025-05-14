import { useState } from 'react'

import './App.css'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([])

  function addToCart(product) {

    const trovato = addedProducts.find(p => p.name === product.name)

    if (!trovato) {
      const newProduct = { ...product, quantity: 1 }
      setAddedProducts([...addedProducts, newProduct])
    }

    console.log(addedProducts);


  }

  return (
    <>
      <div>

        <h3>Lista prodotti</h3>

        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span> - <span>€{product.price}</span>
              <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </li>
          ))}
        </ul>
      </div>



      {addedProducts.length > 0 && (
        <div>

          <h3>Carrello</h3>

          <ul>
            {addedProducts.map((item, index) => (
              <li key={index}>
                {item.name} - €{item.price} - Quantità: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default App
