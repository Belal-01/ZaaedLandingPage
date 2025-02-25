import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const IconContainer = (props) => {
  return (
    <div className='bg-bgLightColor rounded-full hover:bg-primaryColor transition-all'>
      <a href={props.url} className={`w-8 h-8   flex flex-row justify-center items-center text-primaryColor hover:text-bgLightColor transition-all cursor-pointer`}>
        {props.name==="telegram"&&<FaTelegramPlane />}
        {props.name==="discurd"&&<FaDiscord />}

      </a> 
    </div>
  )
}

export default IconContainer
