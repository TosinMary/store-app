import React, { useEffect, useState } from 'react'
import { getProductDetailById } from '../fetcher';
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [product, setProduct] = useState({errorMssg: "",responseData: {}})
  const {productId} = useParams();

  const productDetail = async () => {
    const responseObject = await getProductDetailById(productId);
    setProduct(responseObject);
  }

useEffect(() => {
productDetail()
},[productId]);

  return ( 
     <article>
      <div className='product-title'>
        {product.responseData.title}
      </div>
      <figure>
        <div className='product-image-container'>
          <img src={`/assets/${product.responseData.image}`} alt={product.responseData.title}/>
        </div>
      </figure>
      <aside>
        <div className='product-info-dimension'>
          <h1>Dimensions</h1>
          <label>{product.responseData.specs?.dimension}</label>
        </div>
        {product.responseData.specs?.capacity &&
        <div className='product-info-capacity'>
          <h1>Capacity</h1>
          <label>{product.responseData.specs?.capacity}</label>
        </div>
        }
        <div className='product-info-features'>
          <h1>Features</h1>
         <ul>
          {product.responseData.features?.map((f, i)=>{
            return <li key={`feature ${i}`}>{f}</li>
          })}
         </ul>
        </div>
      </aside>
      <aside className='product-finance'>
        <div className='product-finance-price'>
          &pound;{product.responseData.price}
        </div>
        <div className='product-info-stock'>
          <label>Stock in: {product.responseData.stock}</label>
          <label>Free Delivery</label>
        </div>
        <div className='product-action'>
          <button>Add to Action</button>
        </div>
      </aside>
      <div>
        {product.responseData.description}
      </div>
    </article>
  )
}

export default ProductDetails