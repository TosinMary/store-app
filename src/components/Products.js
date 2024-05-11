import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Products({id,title,image,specs,features,price,stock}) {
  const navigate = useNavigate()
  return (
    <>
    <article>
      <div className='product-title' key={id}>
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
      <figure>
        <div className='product-image-container'>
          <img src={`/assets/${image}`} alt={title}/>
        </div>
      </figure>
      <aside>
        <div className='product-info-dimension'>
          <h1>Dimensions</h1>
          <label>{specs.dimension}</label>
        </div>
        {specs.capacity &&
        <div className='product-info-capacity'>
          <h1>Capacity</h1>
          <label>{specs.capacity}</label>
        </div>
        }
        <div className='product-info-features'>
          <h1>Features</h1>
         <ul>
          {features?.map((f, i)=>{
            return <li key={`feature ${i}`}>{f}</li>
          })}
         </ul>
        </div>
      </aside>
      <aside className='product-finance'>
        <div className='product-finance-price'>
          &pound;{price}
        </div>
        <div className='product-info-stock'>
          <label>Stock in: {stock}</label>
          <label>Free Delivery</label>
        </div>
        <div className='product-action'>
          <button onClick={() => navigate(`/products/${id}`)}>View Products</button>
          <button>Add to Action</button>
        </div>
      </aside>
    </article>
    </>
  )
}

export default Products