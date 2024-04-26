import './App.css';
import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products'
import { getCategories, getProducts } from './fetcher';

function App() {
const [categories, setCategories] = useState({errorMssg: " ", responseData: []})
const [products, setProducts] = useState({errorMssg: " ", responseData: []})

const fetchApis = async () => {
const responseObject = await getCategories();
setCategories(responseObject)
} 

const handleCategoryClick = async (id) => {
  const responseObject = await getProducts(id)
    setProducts(responseObject)
}

useEffect(() => {
  fetchApis() 
  handleCategoryClick()
}, [])

const renderCategories = () => {
return categories.responseData.map(c => (
  <Categories key={c.id} id={c.id} title={c.title} onCategoryClick={()=> handleCategoryClick(c.id)} />
 ))
}

const renderProducts = () => {
  return products.responseData.map(p => 
    <Products key={p.id} {...p}>{p.title}</Products> 
  )
}

  return (
    <>
    <header>Hello</header>
    <section>
      <nav>
        {categories.errorMssg && <div>Error: {categories.errorMssg}</div>}
      {categories && renderCategories()}
      </nav>
      <main>
        <h1>Products</h1>
        {products.errorMssg && <div>Error: {products.errorMssg}</div>}
        {products && renderProducts()}
      </main>
    </section>
    <footer>
      
    </footer>
    
    </>
  );
}

export default App;
