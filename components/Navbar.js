import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <ul>
        <Link href="/" >
          <a target="_self">Home</a>
        </Link>
        <Link href="/about/">
          <a target="_self">About</a>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar