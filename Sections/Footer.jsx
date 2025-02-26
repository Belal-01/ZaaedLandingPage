import React from 'react'
import {Links} from "../constants/scripts"
import IconContainer from '../components/IconContainer'
import { socialMedia } from '../constants/scripts'

const Footer = () => {
  return (
    <section className='sm:px-20 px-10' >

      <div className='flex flex-row justify-center'>
       <ul className='flex flex-row flex-wrap justify-center gap-10 items-center '>
          {Links.map((link,index)=>
          <li className='font-medium text-lg text-textColor hover:text-primaryColor transition-all ' key={index}><a href={link.href}>{link.name}</a>
          </li>)}
        </ul>
      </div>
      <div className='socialMedia flex flex-row justify-center pt-5 gap-5'>
          {socialMedia.map((social,index)=><IconContainer name={social.name} url={social.url} key={index}/>)}
      </div>
      <p className='text-center text-textColor py-5'>زوائد 2024، جميع الحقوق محفوظة</p>
      {/* <p className='text-center text-textColor pb-5'>تصميم و تطوير <a className='text-primaryColor' href="https://bilalmustafa-r9de.onrender.com" target='_blank'>BelalMustafa</a></p> */}
    </section>
  )
}

export default Footer
