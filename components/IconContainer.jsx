import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const IconContainer = (props) => {
  return (
    <div className='w-8 h-8 bg-bgLightColor rounded-full flex flex-row justify-center items-center'>
      <a href={props.url} className={`text-primaryColor cursor-pointer`}>
        {props.name==="telegram"&&<FaTelegramPlane />}
        {props.name==="discurd"&&<FaDiscord />}

      </a> 
    </div>
  )
}

export default IconContainer
