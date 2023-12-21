import React from 'react'
import DetailImages from './DetailImages'

export default function Deatails() {
  return (
      <>
        <div className="split">
		<div className="area-1">
		</div><div className="area-2 bg-gray">
            <div className="container">    
                <div className="row">
                    <div className="col-lg-12">     
                        <div className="text-container">
                            <h2>Why Work With Me</h2>
                            <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
                            <h5>DESIGN TOOLS</h5>
                            <p>My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too</p>
                            <h5>DEVELOPMENT SKILLS</h5>
                            <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
                            
                                  <div className="icons-container">
                                      <DetailImages image="images/details-icon-photoshop.png"/>
                                      <DetailImages image="images/details-icon-illustrator.png"/>
                                      <DetailImages image="images/details-icon-html.png"/>
                                      <DetailImages image="images/details-icon-css.png"/>
                                      <DetailImages image="images/details-icon-bootstrap.png"/>
                                      <DetailImages image="images/details-icon-javascript.png"/>
                            </div>
                        </div>
                       

                    </div> 
                </div> 
            </div>
		</div>
    </div>
      </>

                          )
}
