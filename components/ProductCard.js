import React from 'react'
import Button from './Button'

function ProductCard({id, name, image, price}) {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <figure>
        <img src={image} alt={name} className="product-image"/>
      </figure>
      <div className='info-product'>
        <p><b>Precio:</b>{` $${price}`}</p>
        <Button link={`/product/${id}`}/>
      </div>
      <style jsx>{`
        .card{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 25%;
          margin-bottom: 1rem;
          border-radius: 10px;
          padding: 15px;
          -webkit-box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.2);
          -moz-box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.2);
          box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.2);
        }
        .card { transition: all .2s ease-in-out; }
        .card:hover { transform: scale(1.02); }
        .product-image{
          width: 100%;
        }
        .info-product{
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default ProductCard