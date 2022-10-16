import React from 'react'
import { useRouter } from 'next/router'

function Product() {
  const {
    query: { id },
  } = useRouter()

  const [product, setProduct] = React.useState({})

  React.useEffect(() => {
    const fetchurl = `/api/avo/${id}`
    if (!!id) {
      window
        .fetch(fetchurl)
        .then(res => res.json())
        .then(({avo}) => {
          setProduct(avo)
        })
        .catch(err => console.error(err))
    }
  }, [id])

  return <div>{product.name}</div>

}


export default Product