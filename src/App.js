import './App.css';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Layout from './components/Layout';
import { useState, useEffect } from 'react';
import { getCategories } from './fetcher';

function App() {
  const [categories, setCategories] = useState({errorMssg: " ", responseData: []})


    const fetchApis = async () => {
        const responseObject = await getCategories();
        setCategories(responseObject)
        } 
        useEffect(() => {
          fetchApis() 
        }, [])

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout categories={categories} />} >
      <Route path='products/:productId' element={<ProductDetails/>} />
      <Route path='basket' element={<Basket />} />
      <Route path='checkout'element={<Checkout />} />
      <Route path='categories/:categoryId' element={<Categories/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
