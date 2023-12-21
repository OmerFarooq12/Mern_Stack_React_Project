import React from 'react'
import DetailImages from '../DetailsSection/DetailImages'

export default function TestimonialItems(props) {
  return (
    <div className="card">
                        <div className="card-body">
              <p className="testimonial-text">{ props.description}</p>
              <div className="details">
                  <DetailImages image={ props.img} />
                                <div className="text">
                      <div className="testimonial-author">{ props.name}</div>
                      <div className="occupation">{props.profession}</div>
                                </div> 
                            </div> 
                        </div>
                    </div>
  )
}
