import React from 'react'
import Feature from '../components/Feature'


const featurestext = [
  {
    icon:"LuAlarmClock",
    text:"إنشاء الطلب يتم في دقائق"
  },
  {
    icon:"GiTakeMyMoney",
    text:"شراء مواد البناء الزائدة مما يقلل التكاليف"
  },
  {
    icon:"AiOutlineSafety",
    text:"عملية بيع آمنة "
  },
  
  {
    icon:"BsBank",
    text:"تحويلات بنكية موثوقة لقيمة السعر"
  }
]
const WhoWeAre = () => {

  
  return (
    <section id='#who' className='py-10 px-20'>
      <h1 className='text-titleColor text-4xl text-center py-10'>من نحن </h1>
      <p className='text-center text-2xl text-textColor'>زوائد إعمار هو تطبيق رقمي يتيح للمقاولين والافراد بيع وشراء مخلفات ومواد البناء الزائدة، مما يقلل الهدر ويخفض التكاليف في عمليات إعادة الإعمار .</p>

      <div className="features flex flex-row gap-x-10 justify-between py-20">
        {featurestext.map((fea,index)=><Feature icon={fea.icon} text={fea.text} id={index} key={index}/>)}
       

      </div>
    </section>
  )
}

export default WhoWeAre
