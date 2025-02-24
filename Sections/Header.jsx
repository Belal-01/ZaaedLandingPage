import React from 'react'

const Header = () => {
  const Links = [{
    name:"من نحن ",
    href:'#'
  },
  {
    name:"مزايا التطبيق",
    href:'#features'
  },
  {
    name:"صور ألتطبيق",
    href:'#appPictures'
  },
  {
    name:"الاسئلة الشائعة",
    href:'#FAQ'
  },
  {
    name:"اتصل بنا",
    href:'#calls'
  },]
  return (
    <div className='fixed left-0 right-0 top-0 h-20 z-20 bg-bgLightColor flex flex-row justify-between items-center px-20 text-primaryColor '>
      <div>
        
          <img src="/logoLight.jpg" className='w-24 h-18' alt="" />
       
      </div>
      <div className=''>
        <ul className='flex flex-row gap-10 items-center'>
        {Links.map((link,index)=>
        <li className='font-medium text-lg hover:underline underline-offset-8' key={index}><a href={link.href}>{link.name}</a></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Header
