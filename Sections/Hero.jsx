import React from 'react'

const Hero = () => {
  return (
    <section className='flex lg:flex-row flex-col  text-xl items-center h-screen pt-24 sm:px-20 px-10 bg-bgLightColor heroContainer' id='hero'>
      <div className='title flex-1 max-lg:flex max-lg:flex-col max-lg:justify-center'>
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
