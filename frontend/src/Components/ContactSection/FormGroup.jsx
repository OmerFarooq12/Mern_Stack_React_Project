import React from 'react'

export default function FormGroup(props) {
  return (
         <div className="form-group">
                            <input type={props.type} className="form-control-input" id={props.cname} required />
                            <label className="label-control" for={props.for}>{props.name}</label>
         </div>
  )
}
