import React from 'react'
import DetailImages from '../DetailsSection/DetailImages'

export default function ProjectItems(props) {
  return (
      <>
        <div className="text-container">
                        <div className="image-container">
                  <a href="#project">
                      <DetailImages classes='img-fluid' image={props.img} />
                </a>
                        </div> 
              <p><strong>For:</strong> {props.name} <strong>Project:</strong> { props.description}<a className="blue" href="#projects">details</a></p>
        </div>
      </>
  )
}
