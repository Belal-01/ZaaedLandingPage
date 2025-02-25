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
    <section id='#contacts' className='pb-90 px-20'>
      <h2 className='text-2xl text-titleColor text-center py-10'>اتصل بنا</h2>
      <h1 className='text-4xl font-semibold text-titleColor text-center'>يسعدنا دائمًا تواصلكم معنا</h1>
      <div className="contactInfo grid grid-cols-5 gap-10 py-10">
        <div className='col-span-3 bg-gray-100 rounded-3xl px-10 py-16'>

        </div>


        <div className='col-span-2 bg-bgLightColor rounded-3xl px-10 py-10'>
          <h2 className='pb-5 text-2xl font-semibold text-titleColor'>معلومات التواصل</h2>
          <div>
          {contactsInfo.map((info ,index)=><ContactInfo text={info.text} data={info.data} icon={info.icon} key={index}/>)}  
          </div>
          <div className=' Socialicons'>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contacts
