import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
          <div className='mt-16 basis-1/2 md:mt-0 '>
            <img src="./images/Logo.png" alt="logo" />
            <p className='my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ea aut deserunt ex facilis deleniti, sint magni nam quibusdam possimus commodi?
              Minima veritatis expedita in omnis quos reprehenderit, suscipit esse unde illum ex aperiam cum non?
            </p>
            <p>EvoGym All Rights Reserved.</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>GitHub</p>
            <p className='my-5'>Et gravida id et etiam</p>
            <p>Ullamucorper victoms</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact us</h4>
            <p className='my-5'>Tempus metus betus risis vultane egaetas.</p>
            <p>+998 (90) 123 45 67</p>
          </div>
          <div></div>
        </div>
      </footer >
    </>
  )
}

export default Footer