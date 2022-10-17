import React from 'react'
import Link from 'next/link'

function Button({link}) {
  return (
    <>
      <Link href={link}>
        <a target={"_self"} className="button">SEE MORE</a>
      </Link>
      <style jsx>{`
        .button{
          padding: 10px;
          background-color: green;
          max-width: max-content;
          text-decoration: none;
          color: white;
          font-weight: 500;
          border-radius: 10px;
        }
        .button { transition: all .2s ease-in-out; }
        .button:hover { transform: scale(1.1); }
      `}</style>
    </>
  )
}

export default Button