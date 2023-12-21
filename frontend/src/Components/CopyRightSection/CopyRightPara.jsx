import React from 'react'

export default function CopyRightPara(props) {
  return (
    <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <p className="p-small">{props.para} <a className="no-line" href={ props.link}>{props.name}</a></p>
                </div> 
            </div>
        </div>
  )
}
