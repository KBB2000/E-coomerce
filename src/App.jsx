import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from "./Components/ProductDetails"
import Search from "./Components/Search"
import Cart from "./Components/Cart"
import { items } from './Components/Data';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <div className="App">
        <Navbar cart={cart} setData={setData} /> 
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search/:term" element={<Search />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
