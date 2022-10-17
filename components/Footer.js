import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='title'>Developed by Yeisson Ortiz</h4>
      <figure className='icon-container'>
        <Link href={'https://www.linkedin.com/in/yeissonortiz/'} target={"_blank"}>
          <img src='linkedin-icon.png' alt='linkedin' className='icon'/>
        </Link>
        <Link href={'https://www.instagram.com/yeisson2183/'} target={"_blank"}>
          <img src='Instagram_icon.png.webp' alt='instagram' className='icon'/>
        </Link>
      </figure>
      <style>{`
        .footer{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          -webkit-box-shadow: 0px -5px 5px 0px rgba(0,0,0,0.15);
          -moz-box-shadow: 0px -5px 5px 0px rgba(0,0,0,0.15);
          box-shadow: 0px -5px 5px 0px rgba(0,0,0,0.15);
        }
        .title{
          margin: 0px;
          margin-top: 1rem;
        }
        .icon-container{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        .icon{
          width: 25px;
        }
        .icon:hover{
          cursor: pointer;
        }
      `}</style>
    </footer>
  )
}

export default Footer