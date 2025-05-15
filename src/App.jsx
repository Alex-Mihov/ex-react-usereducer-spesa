// Importa l'hook useState da React
import { useState } from 'react'

// Importa il file degli stili
import './App.css'

// Definisce il componente principale App
function App() {

  // Array di prodotti disponibili nel negozio con nome e prezzo
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  // Stato per gestire i prodotti aggiunti al carrello
  const [addedProducts, setAddedProducts] = useState([])

  // Funzione per aggiungere un prodotto al carrello
  function addToCart(product) {
    // Cerca se il prodotto è già presente nel carrello
    const trovato = addedProducts.find(p => p.name === product.name)

    // Se non è presente, lo aggiunge con quantità 1
    if (!trovato) {
      const newProduct = { ...product, quantity: 1 }
      setAddedProducts([...addedProducts, newProduct])
    } else {
      // Se è già presente, aggiorna la quantità
      updateProductQuantity(product.name)
    }

    // Log per debug
    console.log(addedProducts);
  }

  // Funzione per aggiornare la quantità di un prodotto
  function updateProductQuantity(productName) {
    // Mappa l'array dei prodotti
    const update = addedProducts.map(p => {
      // Se trova il prodotto, incrementa la quantità
      if (p.name === productName) {
        return { ...p, quantity: p.quantity + 1 }
      }
      // Altrimenti lascia il prodotto invariato
      return p
    })

    // Aggiorna lo stato con il nuovo array
    setAddedProducts(update)
  }

  // Funzione per rimuovere un prodotto dal carrello
  function removeFromCart(product) {
    // Filtra l'array rimuovendo il prodotto selezionato
    setAddedProducts(curr => curr.filter(p => p.name !== product.name))
  }

  // Calcola il totale del carrello moltiplicando prezzo per quantità
  const total = addedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)

  // Renderizza l'interfaccia
  return (
    <>
      <div>
        {/* Sezione lista prodotti */}
        <h3>Lista prodotti</h3>
        <ul>
          {/* Mappa i prodotti disponibili */}
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span> - <span>€{product.price}</span>
              {/* Bottone per aggiungere al carrello */}
              <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mostra il carrello solo se ci sono prodotti */}
      {addedProducts.length > 0 && (
        <div>
          {/* Sezione carrello */}
          <h3>Carrello</h3>
          <ul>
            {/* Mappa i prodotti nel carrello */}
            {addedProducts.map((item, index) => (
              <li key={index}>
                {item.name} - €{item.price} - Quantità: {item.quantity}
                {/* Bottone per rimuovere dal carrello */}
                <button onClick={() => removeFromCart(item)}>Rimuovi dal carrello</button>
              </li>
            ))}
          </ul>
          {/* Mostra il totale formattato con 2 decimali */}
          <h4>Totale: €{total.toFixed(2)}</h4>
        </div>
      )}
    </>
  )
}

// Esporta il componente
export default App
