import React from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../fetcher'
import { useEffect, useState } from 'react'
import Products from './Products'


function Categories({id, title, onCategoryClick}) {
const [product, setProduct] = useState({errorMssg: "",responseData: []})
const {categoryId} = useParams()
  const products = async () => {
    const responseObject = await getProducts(categoryId);
    setProduct(responseObject)
  }

useEffect(() => {
  products()
},[categoryId])



const renderProducts = () => {
  return product.responseData.map(p => 
    <Products key={p.id} {...p}>{p.title}</Products> 
  )
}

  return (
    <>
    <div>
    {products.errorMssg && <div>Error: {products.errorMssg}</div>}
        {products && renderProducts()}
    </div>
    </>
  )
}

export default Categories