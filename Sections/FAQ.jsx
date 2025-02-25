import React from 'react'
import Quastions from '../components/quastions'

const questionsArr = [
  {
    question:"كيف يمكنني البدء في استخدام تطبيق خرده؟",
    answer:"يمكن تنزيل التطبيق من متجر التطبيقات (App Store) أو (Google Play)، ومن ثم تسجيل حساب جديد أو تسجيل الدخول إذا كان لديك حساب بالفعل"
  },
  {
    question:"هل يمكنني التسجيل كمستخدم في تطبيق زوائد؟",
    answer:"نعم، يمكن لأي شخص تسجيل حساب في تطبيق زوائد ليتمكن من بيع الخردة الخاصه به."
  },
  {
    question:"ما هي الميزات الرئيسية لتطبيق زوائد؟",
    answer:"ما هي الميزات الرئيسية لتطبيق زوائد؟"
  },
  {
    question:"ما هو هدف تطبيق زوائد؟",
    answer:"يهدف تطبيق زوائد إلى تسهيل عملية شراء الخردة بكافة انواعها القديمة بطريقة مرنة وفعالة."
  },
  {
    question:"كيف يمكنني بيع الحديد والمعادن القديمة عبر التطبيق؟",
    answer:"يمكنك إنشاء طلب جديد من خلال حسابك بالتطبيق للخردةالتي ترغب في بيعها، مع إضافة التفاصيل مثل الكمية، الحالة، وصور للخردة او المعادن."
  },
]
const FAQ = () => {
  return (
    <section id='#FAQ' className='py-10 px-20  '>
      <h2 className='text-2xl text-titleColor text-center py-10'>الأسئلة الشائعة</h2>
      <h1 className='text-4xl font-semibold text-titleColor text-center'>لتقديم خدمة أفضل اجبنا على أكثر الأسئلة شيوعاً</h1>
      <div className="quastions py-10 px-10">
        {questionsArr.map((ques,index)=><Quastions answer={ques.answer} quastion={ques.question} id={index} key={index} />)}

      </div>
      
    </section>
  )
}

export default FAQ
