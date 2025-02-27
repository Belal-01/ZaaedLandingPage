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
  gsap.to('.heroImg',{
    translateY:20,
    duration:2.1,
    repeat:-1,
    yoyo:true,
   
  })
  },[])
  return (
    <section className=' flex md:flex-row flex-col text-xl items-center h-screen pt-24  lg:gap-5  bg-bgLightColor heroContainer' id='hero'>
      <div className='heroTitle flex-1 flex flex-col justify-between'>

        <div>
          <h1 className='text-primaryColor font-bold 2xl:text-4xl  md:text-3xl text-2xl  xl:leading-16 md:leading-12 lg:pb-10'>
            لا تهدرها ,استفد منها !
          </h1>
        </div>
        <div>
          <h1 className='text-primaryColor font-bold 2xl:text-6xl xl:text-4xl lg:text-4xl md:text-3xl text-2xl 2xl:py-10 py-5 xl:leading-16 md:leading-12'>
              حقق دخل إضافي من بيع الزوائد
            </h1>
          <p className='2xl:text-4xl xl:text-2xl md:text-xl text-xl font-semibold text-titleColor'>
            زوائد هو تطبيق إحترافي يتيح لأصحاب المتاجر الصغيرة والمتوسطة والمشاريع الإعمارية كسب دخل إضافي من خلال بيع المخزون الفائض.
          </p>
         </div>
      </div>
      <div className='heroImg flex-1 flex flex-row justify-center'>
        <img src="/heroImg2.png" className=' 2xl:h-[500px]  sm:h-[425px] h-[370px]' alt="app welcom img" />
      </div>
    </section>
  )
}

export default Hero
