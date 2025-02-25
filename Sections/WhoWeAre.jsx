import React from 'react'
import Feature from '../components/Feature'
import { featurestext } from '../constants/scripts'


const WhoWeAre = () => {

  
  return (
    <section id='who' className='py-10 sm:px-20 px-10'>
      <h1 className='text-textColor text-4xl text-center py-10'>من نحن </h1>
      <p className='text-center sm:text-4xl text-2xl text-titleColor '>
        زوائد هو سوق إلكتروني يتيح لأصحاب المتاجر والمقاولين تحقيق دخل إضافي من خلال بيع مواد البناء الزائدة أو القديمة, مما يقلل الهدر ويخفض التكاليف  في عمليات إعادة الإعمار لأصحاب المشاريع الصغيرة والدخل المحدود .</p>

      <div className="features grid grid-cols-4 gap-10 justify-between py-20">
        {featurestext.map((fea,index)=><Feature icon={fea.icon} text={fea.text} id={index} key={index}/>)}
       

      </div>
    </section>
  )
}

export default WhoWeAre
