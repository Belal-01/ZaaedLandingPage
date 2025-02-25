import React from 'react'

import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

const ContactInfo = (props) => {
  return (
    <div className="py-2">
      <div className='flex flex-row items-center gap-3 pb-2'>
        <span className='text-primaryColor'>
          {props.icon==="phone"&&<FaPhone />}
          {props.icon==="whatsApp"&&<FaWhatsapp />}
          {props.icon==="email"&&<MdOutlineEmail />}
        </span>
        <span className='text-xl font-medium text-primaryColor'>
          {props.text}

        </span>
      </div>
      <p className='text-lg font-medium '>{props.data}</p>
    </div>
  )
}

export default ContactInfo
