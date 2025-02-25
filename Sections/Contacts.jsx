import React from 'react'
import { BiPhone } from 'react-icons/bi'
import ContactInfo from '../components/ContactInfo'
import { contactsInfo } from '../constants/scripts'

const Contacts = () => {
  return (
    <section id='contacts' className=' sm:px-20 px-10'>
      <h2 className='text-2xl text-titleColor text-center py-10'>معلومات التواصل</h2>
      <h1 className='sm:text-4xl text-3xl font-semibold text-titleColor text-center'>
        يسعدنا دائمًا تواصلكم معنا
      </h1>
      <div className="contactInfo gap-10 py-10">
    
          
          <div className='flex flex-row flex-wrap justify-center gap-10 items-center md:px-10 lg:px-20 sm:justify-between max-w-[800px] mx-auto'>
          {contactsInfo.map((info ,index)=><ContactInfo text={info.text} data={info.data} icon={info.icon} key={index}/>)}  
          </div>
          
        

      </div>
    </section>
  )
}

export default Contacts
