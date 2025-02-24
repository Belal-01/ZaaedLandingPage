import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row text-xl items-center h-screen pt-24 px-20 bg-bgLightColor heroContainer'>
      <div className='title flex-1'>
         <h1 className='text-primaryColor font-bold text-4xl py-10'>استفيد من زوائد الإعمار</h1>
         <p className='text-2xl font-semibold text-titleColor'>زوائد هو تطبيق احترافي لكل من لديه  <br/>زوائد إعمار ويريد بيعها </p>
      </div>
      <div className='heroImg flex-1'>
        <img src="/heroImg.png" className='h-[500px]' alt="" />
      </div>
    </div>
  )
}

export default Hero
