import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Layout = ({children}) => {
  
  function ChildComponent({child}) {
    return (
      <div className='content-layout'>
        {child}
        <style jsx>
          {`
            .content-layout{
              padding: 1rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    )
  }
  

  return (
    <>
      <div className='layout height-max'>
        <Navbar/>
          <ChildComponent child={children}/>
        <style jsx>{`
          .layout{
            display: flex;
            flex-direction: column;
          }
          .height-max {
            min-height: 90vh;
          }
          .footer {
            height: 3rem;
          }
        `}</style>
      </div>
      <Footer/>
    </>
  )
}

export default Layout 