import React from 'react'
import Buttons from './Buttons'

export default function Headers() {
  return (
    <div> 
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                              <h1 className="h1-large">I love to create beautiful and efficient websites</h1>
                              <Buttons classes='btn-solid-lg page-scroll' link='#about' tags='' name='Discover'/>
                              <Buttons classes='btn-outline-lg page-scroll' link='#about' tags={<i className="fas fa-user"></i>} name='Contact Me'/>
                        </div> 
                    </div>
                </div> 
            </div> 
        </header> 
    </div>
  )
}
