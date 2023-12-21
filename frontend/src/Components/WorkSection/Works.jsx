import React from 'react'
import WorkItems from './WorkItems'

export default function Works() {
  return (
    <div>
         <div className="basic-4">
        <div className="container">
            <div className="row">
                <WorkItems name='Zigoland' description='started a new website from ground up for a new product '  img='images/work-1.jpg' />
                <WorkItems name='Visodream' description='developed a new forum for the Visodream community'  img='images/work-2.jpg' />
                <WorkItems name='Primoday' description=' complete redesign of their corporate website and platform'  img='images/work-3.jpg' />
            </div> 
            <div className="row">
                <WorkItems name='Nextlite' description='created a custom video editing and upload web app '  img='images/work-4.jpg' />
                <WorkItems name='Syncnow' description=' web design for their corporate websites and landing pages '  img='images/work-5.jpg' />
                <WorkItems name='Shifter' description=' started a new website from ground up for a new product '  img='images/work-6.jpg' />
                
            </div> 
        </div> 
    </div>
    </div>
  )
}
