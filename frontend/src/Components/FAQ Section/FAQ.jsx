import React from 'react'
import QuestionCards from './QuestionCards'

export default function FAQ() {
  return (
    <div>
       <div id='faq' className="accordion-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Frequent questions</h2>
                </div> 
            </div>
            <div className="row">
                <div className="col-lg-12">

                          <div className="accordion" id="accordionExample">
                                <QuestionCards id='headingOne' target = '#collapseOne' tf='true' controls='collapseOne' id2='collapseOne' classes='show' name='headingOne' heading='How can I contact you and quickly get a quote for my online project?' question= 'The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details'/>
                              <QuestionCards id='headingTwo' target = '#collapseTwo' tf='false' controls='collapseTwo' id2='collapseTwo'  name='headingTwo' heading=' Do you create designs from the ground up or you are using themes?' question='   The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details'/>
                              <QuestionCards id='headingThree' target = '#collapseThree' tf='false' controls='collapseThree' id2='collapseThree' name='headingThree' heading='  Will I receive any included maintenance or warranty after project delivery?' question='The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details'/>
                              <QuestionCards id='headingFour' target = '#collapseFour' tf='false' controls='collapseFour' id2='collapseFour'  name='headingFour'     heading='   If something goes wrong with the project can I have my money back?'           question='The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details'/>
                              <QuestionCards id='headingFive' target = '#collapseFive' tf='false' controls='collapseFive' id2='collapseFive' name='headingFive'      heading='  Whats your preferred method of payment and do you need an advance?'           question='The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details'/>
                    </div> 

                </div> 
            </div> 
        </div> 
    </div>
    </div>
  )
}
