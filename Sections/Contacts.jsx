import React from 'react'
import { BiPhone } from 'react-icons/bi'
import ContactInfo from '../components/ContactInfo'

const contactsInfo = [
  {
    data:"000 000  00 09",
    text:"رقم الجوال",
    icon:"phone"
  },
  {
    data:" 000 000 000 +963",
    text:"الواتساب",
    icon:"whatsApp"
  },
  {
    data:"Support@gmail.com",
    text:"البريد الإلكتروني",
    icon:"email"
  },
]
const Contacts = () => {
  return (
    <section id='#contacts' className=' px-20'>
      <h2 className='text-2xl text-titleColor text-center py-10'>معلومات التواصل</h2>
      <h1 className='text-4xl font-semibold text-titleColor text-center'>
        يسعدنا دائمًا تواصلكم معنا
      </h1>
      <div className="contactInfo gap-10 py-10">
    
          
          <div className='flex flex-row gap-5 px-20 justify-between max-w-[800px] mx-auto'>
          {contactsInfo.map((info ,index)=><ContactInfo text={info.text} data={info.data} icon={info.icon} key={index}/>)}  
          </div>
          <div className=' Socialicons'>

          </div>
        

      </div>
    </section>
  )
}

export default Contacts
