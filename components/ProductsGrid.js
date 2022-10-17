import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductsGrid() {
  const [productList, setProductList] = React.useState([]);
  
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(res => res.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className='grid-container'>
      {productList.map(product => 
        <ProductCard key={product.id} id={product.id} name={product.name} image={product.image} price={product.price}/>
      )}
      <style jsx>{`
        .grid-container{
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 3.3%;
        }
      `}</style>
    </div>
  )
}

export default ProductsGrid
