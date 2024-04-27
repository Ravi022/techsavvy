import React from 'react'
import './Faq.css'

const Faq = () => {

    const handleToggle = (e) => {
        
        const question = e.target 
        const answer = e.target.nextSibling 

        if(question.classList.contains('faq-accordion-question-button-active')) {
            question.classList.remove('faq-accordion-question-button-active')
            answer.classList.remove('faq-accordion-answer-active')
        } else {
            // // reset 
            const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
            const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            openQuestions?.forEach(item => item.classList.remove('faq-accordion-answer-active'))      
            openBtn?.forEach(btn => btn.classList.remove('faq-accordion-question-button-active'))

            question.classList.add('faq-accordion-question-button-active')           
            answer.classList.toggle('faq-accordion-answer-active') 
        }
    }

    const data = [
        {
            id: 1,
            question: "1",
            answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        },
        {
            id: 2,
            question: "2",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
            id: 3,
            question: "3",
            answer: "Click “Forgot password” from the login page or “Change password” from your profile     page. A reset link will be emailed to you.",
        },
       
    ]

    return (
        <div className='faq-accordion df'>
           <div className="faq-accordion-container "
           data-aos="fade-in" data-aos-delay="250" data-aos-duration="500"
           >
               <div className="faq-accordion-content flex">
                  

                    {data.map((item)=>(
                   <div className="faq-accordion-question" key={item.id}>
                        <button className="faq-accordion-question-button" 
                        onClick={handleToggle}> {item.question}
                        </button>
                        <div className="faq-accordion-answer">
                            <p> {item.answer}</p>
                        </div>
                   </div>
                    ))}
                    
               </div>
           </div>
        </div>
    )
}

export default Faq