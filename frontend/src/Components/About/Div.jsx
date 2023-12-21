import React from 'react'

export default function Div(props) {
  return (
      <div className="col-lg-4">
                    <div className="text-container second">
              <div className="time">{ props.firstext}</div>
                        <h6>{ props.secondtext}</h6>
                        <p>{ props.thirdtext}</p>
                        <div className="time">{ props.fourthtext}</div>
                        <h6>{ props.fifthtext}</h6>
                        <p>{ props.sixthtext}</p>
                    </div>
        </div> 
  )
}
