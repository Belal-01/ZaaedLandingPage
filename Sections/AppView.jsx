import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { imgs } from '../constants/scripts';
const AppView = () => {
  const [shiftToFirstImg,setShiftTOFirstImg] = useState(0);
  const [currentImgIndex,setCurrentImgIndex] = useState(0);
  const [animcomplete,setAnimComplete] = useState(true);
  const cleanupRef = useRef(null);
  
 

 const calculateTheshiftedSpace = ()=>{
  const width =  window.innerWidth-240;
  console.log("window Innder Widht"+window.innerWidth)
  console.log( "width"+width)
  const rightSpaceOfThImg = (width/2);
  const shiftedSpace =4*261 - (rightSpaceOfThImg);

  setShiftTOFirstImg(shiftedSpace)
 }

 useEffect(()=>{
  console.log("shiftToFirstImg"+shiftToFirstImg)
 },[shiftToFirstImg])

 useEffect(()=>{
  calculateTheshiftedSpace();
  window.addEventListener('resize',()=>{
    calculateTheshiftedSpace();
  })
    
  const length = imgs.length - 7;
  let count = 0 
  const intervalId = setInterval(() => {
    setCurrentImgIndex(count)
  
    if(count>=length-1)
      count = 0 
    else
     count +=1;

    // console.log("interval")
  }, 3000);
  // setInterval(intervalId)
  const effect = () => {
    console.log('Effect is running');
    // Return the cleanup function
    return () => {
      clearInterval(intervalId);
  };
};
cleanupRef.current = effect();

return cleanupRef.current;

 },[])

 useGSAP(() => {
  // console.log('shiftToFirstImg',shiftToFirstImg)
  gsap.to(".slider",{
    x:shiftToFirstImg,
    duration:2,
    ease:"back.inOut"
  })
 },[shiftToFirstImg])

 useGSAP(() => {
  // console.log('currentImgIndex',currentImgIndex)
  setAnimComplete(false)
  gsap.to(".slider",{
    x:shiftToFirstImg+currentImgIndex*260,
    duration:1,
    ease:"back.inOut",
    onComplete: () => {
     
      setAnimComplete(true)
    }
  })
 },[currentImgIndex])

 const handleCleanup = () => {
  if (cleanupRef.current) {
      cleanupRef.current(); // Call the cleanup function manually
  }
};

 const handleImgScroll = (direction)=>{
  
  const length = imgs.length-7;
  if(direction==="right"){
    if(currentImgIndex>0)
        setCurrentImgIndex(currentImgIndex-1)
    else if(currentImgIndex===0)
        setCurrentImgIndex(length-1)
  }else if(direction==="left"){
    if(currentImgIndex<length-1)
      setCurrentImgIndex(currentImgIndex+1)
  else if(currentImgIndex===length-1)
      setCurrentImgIndex(0)
  }
  console.log("cleared")
  // clearInterval(interval);

 }

  return (
    <div className='py-10' id='appPictures'>
      <div className='py-10'>
        <h1 className='text-4xl font-bold text-center text-primaryColor' > صور التطبيق </h1>
      </div>
      <div className='relative  '>
        <div className='overflow-x-auto appViewSlider'>
        <div className='slider  flex flex-row gap-5 justify-center w-fit pt-3'>
          {imgs.map((img,index)=>(
            <div key={index} className='w-[240px] h-[470px] appImg '>
              <img src={img.src} className={`appImg-${img.id} ${img.id===currentImgIndex&&animcomplete ? 'opacity-100' : 'opacity-25 '} transition-opacity w-full h-full rounded-3xl overflow-hidden`} alt="" loading='eager'/></div>
            ))}
        </div>
        </div>
        <div className="layer flex flex-row justify-center absolute top-0 left-0 right-0 z-10">
            <div className='w-[260px] h-[490px]'>
              <img src="/phoneCover.png" className='w-full h-full' alt="" />
            </div>
        </div>
      </div>

      <div className='py-10 flex flex-row gap-10 items-center justify-center'>
        <button className='py-2 px-4 bg-white opacity-45  text-white rounded-4xl cursor-pointer' onClick={()=>{
          handleImgScroll("right")
          handleCleanup()}}>
          <FaArrowRight className='text-primaryColor'/>
          </button>
        <div className='flex flex-row gap-2'>
          {imgs.map((img,index)=>{
            if(img.id>=0)
           return ( 
           <div key={index} className={`w-2 h-2 ${img.id===currentImgIndex ? 'bg-primaryColor' : 'bg-gray-400'} rounded-full cursor-pointer`} onClick={()=>{
            setCurrentImgIndex(img.id)
            handleCleanup()}}>
            
           </div>)})}
        </div>
        <button className='py-2 px-4  opacity-45 text-white rounded-4xl cursor-pointer' onClick={()=>{
          handleImgScroll("left")
          handleCleanup()}}>
              <FaArrowLeft className='text-primaryColor'/>
          </button>
      </div>
    </div>
  )
}

export default AppView
