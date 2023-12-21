import React from 'react'
import FormGroup from './FormGroup'

export default function Contact() {
  return (
    <div>
          <div id="contact" className="form-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Contact details</h2>
                    <p className="p-heading">For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a className="blue no-line" href="#your-link">contact@domain.com</a></p>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
                  
                    <form id="contactForm">
                        <FormGroup type='text' for='cname' id='cname' name='Name'/>
                        <FormGroup type='email' for='cemail' id='cemail' name='Email'/>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" for="cmessage">Project details</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>
               

                </div> 
            </div>
        </div>
    </div>
    </div>
  )
}
