import React from 'react'

export default function ServiceCards(props) {
  return (
    <div className="col-lg-4">
                    <div className="text-box">
                        <i className={props.classes}></i>
                        <h4>{props.heading}</h4>
              <p>{ props.para}</p>
                    </div> 
    </div> 
  )
}
