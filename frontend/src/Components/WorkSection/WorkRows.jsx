import React from 'react'

export default function WorkRows() {
  return (
    <div className="row">
                <div className="col-lg-4">
                    <div className="text-container">
                        <div className="image-container">
                            <a href="#projects">
                                <img className="img-fluid" src="images/work-1.jpg" alt="alternative" />
                            </a>
                        </div> 
                        <p><strong>For:</strong> Zigoland, <strong>Project:</strong> started a new website from ground up for a new product <a className="blue" href="#projects">details</a></p>
                    </div> 
                </div> 
                <div className="col-lg-4">
                    <div className="text-container">
                        <div className="image-container">
                            <a href="#projects">
                                <img className="img-fluid" src="images/work-2.jpg" alt="alternative"/>
                            </a>
                        </div> 
                        <p><strong>For:</strong> Visodream, <strong>Project:</strong> developed a new forum for the Visodream community <a className="blue" href="#projects">details</a></p>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="text-container">
                        <div className="image-container">
                            <a href="#projects">
                                <img className="img-fluid" src="images/work-3.jpg" alt="alternative" />
                            </a>
                        </div> 
                        <p><strong>For:</strong> Primoday, <strong>Project:</strong> complete redesign of their corporate website and platform <a className="blue" href="#projects">details</a></p>
                    </div>
                </div>
            </div> 
  )
}
