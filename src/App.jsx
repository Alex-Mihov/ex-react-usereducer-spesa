import { useState } from 'react'

import './App.css'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  // const [addedProducts, setAddedProducts] = useState([])

  return (
    <>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            <span>{p.name}</span> - <span>{p.price}€</span>

          </li>
        ))}
      </ul>


    </>
  )
}

export default App
