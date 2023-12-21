import React from 'react'
import ServiceCards from './ServiceCards'

export default function Services() {
  return (
    <div>
          <div id="services" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Offered services</h2>
                    <p className="p-heading">Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
                </div> 
            </div> 
                  <div className="row">
                      <ServiceCards classes='far fa-gem' heading='DESIGN' para='Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth' />
                      <ServiceCards classes='fas fa-code' heading='DEVELOPEMENT' para='I can code my own designs or even use the customers design as base. My focus is to generate clean code thats well structured for reliability' />
                      <ServiceCards classes='fas fa-tv' heading='BASIC SEO' para='i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money' />
            </div> 
        </div>
    </div>
    </div>
  )
}
