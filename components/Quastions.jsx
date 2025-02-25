import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'

const Quastions = (props) => {

  const [showAnswer,setShowAnswer] = useState(false);
  useGSAP(()=>{
    gsap.to(`.verLine-${props.id}`,{
      rotate:90,
      y:4
    })
  },[])


  useGSAP(()=>{
    if(!showAnswer){
      gsap.to(`.verLine-${props.id}`,{
        opacity:1,
        rotate:+270,
        duration:0.2,
        
      })
      gsap.to(`.horLine-${props.id}`,{
        rotate:+180,
        duration:0.2,
        
      })
      gsap.to(`.answerBox-${props.id}`,{
        height:40,
        duration:0.2
      })
      gsap.to(`.answerText-${props.id}`,{
        opacity:0,
        translateY:-10,
        duration:0.4
      })

    }
    else{
      gsap.to(`.verLine-${props.id}`,{
        rotate:-270,
        duration:0.2,
        opacity:0,
        
      })
      gsap.to(`.horLine-${props.id}`,{
        rotate:-180,
        duration:0.2,
        
        
      })
      gsap.to(`.answerBox-${props.id}`,{
        height:100,
        duration:0.2
      })
      gsap.to(`.answerText-${props.id}`,{
        opacity:1,
        translateY:0,
        duration:0.4,
        
      })
    }


  },[showAnswer])

  return (
    <div className='quastion flex flex-row justify-between w-full py-8 border-t-2 border-textColor'>
      <div className='flex flex-row gap-8'>
        <span className='text-2xl'>{props.id+1}</span>
        <div className={`flex flex-col gap-5 transition-all  answerBox-${props.id}`}>
          <span className={`text-2xl  font-bold ${showAnswer?'text-primaryColor':'text-titleColor'} transition-colors`}>{props.quastion}</span>
         { <span className={`answerText-${props.id}`}>{props.answer}</span>}
        </div>
      </div>
      <div className='cursor-pointer plusSign' onClick={()=>setShowAnswer(prev=>!prev)}>
          <div className={`w-6 h-1 bg-titleColor rounded-xl verLine-${props.id}`}></div>
          <div className={`w-6 h-1 rounded-xl horLine-${props.id} ${showAnswer?'bg-primaryColor':'bg-titleColor'} transition-colors`}></div>
      </div>
      
    </div>
  )
}

export default Quastions
