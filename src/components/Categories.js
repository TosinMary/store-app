import React from 'react'

function Categories({id, title, onCategoryClick}) {
  return (
    <>
    <div key={id} onClick={()=> onCategoryClick(id)}>{title}</div>
    </>
  )
}

export default Categories