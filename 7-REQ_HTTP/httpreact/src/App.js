import { useState, useEffect } from 'react';

import './App.css';

/* 4- custom hook */
import { useFetch } from './hooks/useFetch';

function App() {

  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([])

  /* 4-custom hook */
  const { data: items, httpConfig } = useFetch(url);


  const [name, setName] = useState("");
  const [price, setprice] = useState("");



  /* 1 - resgatando dados */
  /* useEffect(() => {
    async function get() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    get();
  }, []); */

  /* 2 - add de produtos */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
   // const res = await fetch(url, {
   //   method: "POST",
   //   headers: {
   //     "Content-type": "application/json",
   //   },
   //   body: JSON.stringify(product),
   // });
//
   // /* 3 - carregamento dinâmico */
   // const addedProduct = await res.json();
   // 
   // setProducts((prevProducts) => [...prevProducts, addedProduct]);

   /* 5 - refatorando POST */
   httpConfig(product, "POST");

    setName("");
    setprice("");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {
          items && items.map((product) => (
            <li key={product.id}>{product.name} - R$: {product.price}</li>
          ))
        }
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} onChange={(e) => setprice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>

    </div>
  )
}

export default App;