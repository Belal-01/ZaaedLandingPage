import React, { useEffect, useState } from 'react'
import {Links} from "../constants/scripts"
import classNames from 'classnames'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Navigations from '../components/Navigations'

const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  const [isBlur,setIsBlure] = useState(false)
  const [sideMenu,setSideMenu] = useState(()=>{return window.innerWidth<=768});

  useGSAP(()=>{
    if(showMenu){
    gsap.to('.topMenu-icon',{
      rotate:45,
      y:10,
      duration:0.5
    })
    gsap.to('.bottomMenu-icon',{
      rotate:-45,
      y:-10,
      duration:0.5

    })
    gsap.to('.subMenu',{
      bottom:0,
      duration:0.3

    })
  }else{
    gsap.to('.topMenu-icon',{
      rotate:0,
      y:0,
      duration:0.5
    })
    gsap.to('.bottomMenu-icon',{
      rotate:0,
      y:0,
      duration:0.5

    })
    gsap.to('.subMenu',{
      bottom:"1500px",
      duration:0.3

    })
  }
  },[showMenu])

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth <=768){
        setSideMenu(true)
      }else
        setSideMenu(false)
    })
    window.addEventListener('scroll',()=>{
      blurHeader();
    })
  },[])
  useEffect(()=>{
    console.log("sideMenu"+sideMenu)
  },[sideMenu])
  const blurHeader =()=>{
    if(window.scrollY>=80)
      setIsBlure(true)
    else
      setIsBlure(false)
    
    }


  return (
    <>
    <header className={classNames('fixed left-0 right-0 top-0 h-20 z-20 bg-bgLightColor flex flex-row justify-between items-center sm:px-20 px-10 text-primaryColor overflow-hidden',{"blur-navbar":isBlur})}>
      <div>
          <img src="/logoLight.png" className='w-24 h-24' alt="" />
      </div>
      <div className=''>
        <Navigations  />
      </div>
 

{/* sie Menu */}
      {sideMenu&&
   <span className='flex flex-col justify-between cursor-pointer min-h-6  fixed left-10 top-7 z-40' onClick={()=>{setShowMenu(prev=>!prev)
        }}> 
          <div className={classNames('sm:w-10 w-8 sm:h-[4px] h-[3px] bg-primaryColor rounded-full topMenu-icon')}></div>
          <div className={classNames('sm:w-6 w-5 sm:h-[4px] h-[3px] bg-primaryColor rounded-full ',{'hidden':showMenu})}></div>
          <div className={classNames('sm:w-10 w-8 sm:h-[4px] h-[3px] bg-primaryColor rounded-full bottomMenu-icon')}></div>
    </span>
    }

    {sideMenu&&<div className={`subMenu fixed top-0 left-0 right-0 bg-bgLightColor z-30 flex justify-center   items-center ${showMenu?'':'hidden'}`}>
              <ul className={`flex flex-col lg:gap-10 gap-6 items-center `}>
              {Links.map((link,index)=>
              <li className='font-medium text-primaryColor text-lg hover:underline underline-offset-8' key={index} onClick={()=>{setShowMenu(false)}} ><a href={link.href}>{link.name}</a>
              </li>)}
              </ul>
         </div>}
    </header>


  
     
    </>
  )
}

export default Header
