import React from 'react'
import NavIcons from '../Nav/NavIcons'

export default function Footer() {
  return (
    <div>
         <div className="footer bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                          <div className="social-container">
                              <NavIcons name='facebook-f' link='http://facebook.com'/>
                              <NavIcons name='pinterest-p' link='http://facebook.com'/>
                              <NavIcons name='instagram' link='http://facebook.com'/>
                              <NavIcons name='youtube' link='http://facebook.com'/>
                              <NavIcons name='twitter' link='http://facebook.com'/>
                    </div>
                </div> 
            </div>
        </div> 
    </div>
    </div>
  )
}
