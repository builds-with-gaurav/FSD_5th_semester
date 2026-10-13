
import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Product from './Components/Product'
import Footer from './Components/Footer'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  return (
    <div>
      <Header />
      <Product products={products} />
      <Footer />
    </div>
  )
}

export default App
