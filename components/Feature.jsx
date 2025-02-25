import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { BsClock } from 'react-icons/bs'
import { BsBank } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";

const Feature = (props) => {


   const handleMousehover = (id)=>{
      gsap.to(`.featureBox-${id}`,{
        translateY:-8,
        scale:1.02,
        duration:0.4,
        boxShadow:"4px 10px 15px 0px rgba(144 144 144,0.2)",
       })
     
   }

   const handleMouseLeave = (id)=>{
    gsap.to(`.featureBox-${id}`,{
      translateY:0,
      scale:1,
      duration:0.4,
      boxShadow:"5px 5px 20px 0px rgba(144 144 144,0.0)",
     })
   
 }
 
   


  return (
    <div className={`featureBox-${props.id} lg:col-span-1 md:col-span-2 col-span-4 flex flex-col gap-10 bg-bgLightColor py-14 px-6 rounded-2xl cursor-pointer` }onMouseOver={()=>handleMousehover(props.id)}
    onMouseLeave={()=>handleMouseLeave(props.id)}>
      <div className="icon flex flex-row justify-center" >
        {props.icon==="BsBank"&&<BsBank className='w-10 h-10 text-primaryColor'/>}
        {props.icon==="LuAlarmClock"&&<LuAlarmClock className='w-10 h-10 text-primaryColor'/>}
        {props.icon==="GiTakeMyMoney"&&<GiTakeMyMoney className='w-10 h-10 text-primaryColor'/>}
        {props.icon==="AiOutlineSafety"&&<AiOutlineSafety className='w-10 h-10 text-primaryColor'/>}
        
      </div>
      <div className='flex flex-row justify-center'>
        <span className='text-titleColor text-2xl font-bold text-center'>
          {props.text}
          </span>
      </div>
    </div>
  )
}

export default Feature
