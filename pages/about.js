import React from 'react'

export default function about() {
  return (
    <div className='about-container'>
      <p className='aboutParagraph'>
        This Website was created following the instructions from Platzi's Next.js Course 
        and adding something inspiration and individual skills which one I learned a long 
        of experience as Frontend Developer.
        <br/>
        If you like what are you seeing you can find me at LinkedIn as YeissonOrtiz or looking the link
        to my profile in the footer.
      </p>
      <style jsx>
        {`
          .about-container{
            min-width: max-content;
            text-align: center;
          }
          .aboutParagraph{
            font-weight: 500;
            overflow: auto;
          }
        `}
      </style>
    </div>
  )
}
