import React from 'react'

export default function QuestionCards(props) {
  return (
    <div className="card">
                            <div className="card-header" id={props.id}>
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={props.target} aria-expanded={props.tf} aria-controls={props.controls}>
                                    {props.heading}
                                </button>
                            </div>
                            <div id={props.id2} className={`collapse ${props.classes}`} aria-labelledby={props.name} data-parent="#accordionExample">
                                <div className="card-body">
                                   {props.question}
                                </div>
                            </div>
                        </div>
  )
}
