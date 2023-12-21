import React from 'react'
import TestimonialItems from './TestimonialItems'

export default function Testimonials() {
  return (
    <div>
          <div id='testimonial' className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">A few words from people that chose to work with me</h2>
                </div> 
            <div className="row">
                <div className="col-lg-12">
                    <TestimonialItems  name='Samantha Bloom' description='“Mark is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that”' img='images/testimonial-1.jpg' profession='Team Leader - Syncnow'/>
                    <TestimonialItems  name='John Rowling' description='“Loved to work with Mark hes such an awesome developer with great attention to details. He also has a great eye for design”' img='images/testimonial-2.jpg' profession='Marketing Manager - Nexlite'/>
                    <TestimonialItems  name='Lana Smith' description='“So glad we started working with Mark. Weve used many times his design and development skills for our inhouse online projects”' img='images/testimonial-3.jpg' profession='General Manager - Shifter'/>
                   

                   
               
               

                </div> 
            </div> 
        </div> 
    </div>
    </div>
</div>
  )
}
