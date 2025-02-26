import React from 'react'
import { Links } from '../constants/scripts'
const Navigations = () => {
  return (
    <ul className=' flex-row lg:gap-10 gap-6 items-center hidden md:flex'>
          {Links.map((link,index)=>
          <li className='font-medium text-lg hover:underline underline-offset-8' key={index}><a href={link.href}>{link.name}</a>
          </li>)}
      </ul>
  )
}

export default Navigations
