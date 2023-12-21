import React from 'react'
import Div from './Div'

export default function About() {
  return (
    <div>
          <div id="about" className="basic-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-container first">
                        <h2>Hi there I'm Mark,</h2>
                        <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
                    </div> 
                      </div> 
                      <Div classes='second' firstext='2019 - PRESENT' secondtext='Freelance Web Developer' thirdtext='Working happily on my own web projects' fourthtext='2018 - 2019' fifthtext='Lead Web Developer' sixthtext='Beautiful project for a major digital agency'/>
                      <Div classes='second' firstext='2019 - PRESENT' secondtext='Freelance Web Developer' thirdtext='Working happily on my own web projects' fourthtext='2018 - 2019' fifthtext='Lead Web Developer' sixthtext='Beautiful project for a major digital agency'/>
            </div>
        </div>
    </div>
    </div>
  )
}
