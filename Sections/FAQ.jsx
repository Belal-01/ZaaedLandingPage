import React from 'react'
import Quastions from '../components/Quastions'
import { questionsArr } from '../constants/scripts'

const FAQ = () => {
  return (
    <section id='FAQ' className='py-10 sm:px-20  px-10'>
      <h2 className='text-2xl text-titleColor text-center pb-10'>الأسئلة الشائعة</h2>
      <h1 className='sm:text-4xl text-2xl font-semibold text-titleColor text-center'>لتقديم خدمة أفضل اجبنا على أكثر الأسئلة شيوعاً</h1>
      <div className="quastions py-10 md:px-10">
        {questionsArr.map((ques,index)=><Quastions answer={ques.answer} quastion={ques.question} id={index} key={index} />)}

      </div>
      
    </section>
  )
}

export default FAQ
