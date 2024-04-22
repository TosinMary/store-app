import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Categories from './component/Categories';

function App() {
const [results, setResults] = useState([])

const fetchApis = async () => {
  const url = await fetch("http://localhost:3000/categories")
    const data = await url.json()
    console.log(data)
    setResults(data)
}

useEffect(() => {
  fetchApis() 
}, [])

const handleCategoryClick = (id) => {
  alert("id:" + id)
}

const renderCategories = () => {
return results.map(c => 
  <Categories key={c.id} id={c.id} title={c.title} onCategoryClick={()=> handleCategoryClick(c.id)} />
 )
}

  return (
    <>
    <header>Hello</header>
    <section>
      <nav>
      {results && renderCategories()}
      </nav>
      <article>

      </article>
    </section>
    <footer>
      
    </footer>
    
    </>
  );
}

export default App;
