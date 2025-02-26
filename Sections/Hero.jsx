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
    <section className='flex lg:flex-row flex-col text-xl items-center h-screen pt-24 sm:px-20 px-10 gap-5 bg-bgLightColor heroContainer' id='hero'>
      <div className='heroTitle flex-1 max-lg:flex max-lg:flex-col max-lg:justify-center'>
         <h1 className='text-primaryColor font-bold sm:text-4xl text-2xl sm:py-10 py-5'>
            حقق دخل إضافي من بيع الزوائد
          </h1>
         <p className='sm:text-2xl text-xl font-semibold text-titleColor'>
          زوائد هو تطبيق إحترافي يتيح لأصحاب المتاجر الصغيرة والمتوسطة والمشاريع الإعمارية كسب دخل إضافي من خلال بيع المخزون الفائض.
         </p>
      </div>
      <div className='heroImg flex-1'>
        <img src="/heroImg.png" className='h-[500px]' alt="app welcom img" />
      </div>
    </section>
  )
}

export default Hero
