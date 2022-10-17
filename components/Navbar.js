import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar'>
      <figure className='icon-container'>
        <Link href="/">
          <img src="/images/avo-ico.png" alt="avo-platzi" className='icon'/>
        </Link>
      </figure>
      <h1 className='title'>Platzi Avocados</h1>
      <ul className='nav-options'>
        <Link href="/" >
          <a className='nav-option' target="_self">Home</a>
        </Link>
        <Link href="/about/">
          <a className='nav-option' target="_self">About</a>
        </Link>
      </ul>
      <style jsx>
        {`
          .navbar{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
          }
          .icon-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 25%;
          }
          .icon{
            max-width: 40px;
          }
          .icon:hover{
            cursor: pointer;
          }
          .title{
            font-family: ‘Nunito’, sans-serif;
          }
          .nav-options{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            width: 25%;
          }
          .nav-option{
            text-decoration: none;
            color: #000;
            font-weight: 600;
          }
        `}
      </style>
    </nav>
  )
}

export default Navbar