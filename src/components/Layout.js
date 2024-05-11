import React from 'react'
import {Link, Outlet } from 'react-router-dom';


function Layout({categories}) {
    const renderCategories = () => {
        return categories.responseData.map(c => (
          <li key={c.id}>
            <Link to={`/categories/${c.id}`}>{c.title}</Link>
            </li>
         ))
        }
  return (
    <>
    <header>Hello</header>
    <section>
      <nav>
      {categories.errorMssg && <div>Error: {categories.errorMssg}</div>}
        <ul>
      {categories && renderCategories()}
        </ul>
      </nav>
      <main>
       <Outlet />
      </main>
    </section>
    <footer>
      <h4>footer</h4>
    </footer>
    </>
  )
}

export default Layout