import React from 'react'
import CopyRightPara from './CopyRightPara'

export default function CopyRight() {
  return (
      <div>
          <div className="copyright bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                                 <CopyRightPara link="#your-link" name="Your name" para="Copyright ©"/>
                </div> 
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                                <CopyRightPara link="https://themewagon.com/" name="Themewagon" para="Distributed By"/>

                </div> 
            </div>
        </div> 
        
    </div>
    </div>
  )
}
