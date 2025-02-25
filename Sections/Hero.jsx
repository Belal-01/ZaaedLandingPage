import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Hero = () => {
gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from('.heroTitle',{
      translateX:-2000,
      duration:0.6,
      scrollTrigger:{
        trigger:".heroTitle",
        
        scrub:false,
        
      }
    }
    )
    gsap.from('.heroImg',{
      translateX:+2000,
      duration:0.6,
      scrollTrigger:{
        trigger:".heroImg",
       
        scrub:false,
        
      }
    }
    )
  },[])
  return (
    <section className='flex lg:flex-row flex-col  text-xl items-center h-screen pt-24 sm:px-20 px-10 bg-bgLightColor heroContainer' id='hero'>
      <div className='heroTitle flex-1 max-lg:flex max-lg:flex-col max-lg:justify-center'>
         <h1 className='text-primaryColor font-bold text-4xl py-10'>استفيد من زوائد الإعمار</h1>
         <p className='text-2xl font-semibold text-titleColor'>زوائد هو تطبيق احترافي لكل من لديه  <br/>زوائد إعمار ويريد بيعها 
         </p>
      </div>
      <div className='heroImg flex-1'>
        <img src="/heroImg.png" className='h-[500px]' alt="" />
      </div>
    </section>
  )
}

export default Hero
