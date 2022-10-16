import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function index() {
  const [productList, setProductList] = React.useState([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(res => res.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
      .catch(err => console.error(err))
  }, [])
  
  return (
    <div>
      <div>Avo Home</div>
      <h1>{productList.map(product =><div>{product.name}</div>)}</h1>
    </div>
  )
}
