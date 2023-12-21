import React from 'react'
import DetailImages from '../DetailsSection/DetailImages'

export default function WorkItems(props) {
  return (
      <>
        <div className="col-lg-4">
                    <div className="text-container">
                        <div className="image-container">
                      <a href="#projects">
                          <DetailImages classes={'img-fluid' }image={props.img} />
                            </a>
                        </div> 
                        <p><strong>For:</strong> {props.name} <strong>Project:</strong> {props.description} <a className="blue" href="#projects">details</a></p>
                    </div>
                </div>
      </>
  )
}
