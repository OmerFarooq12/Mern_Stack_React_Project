import React from 'react'

export default function DetailImages(props) {
  return (
    <>
        <img className={props.classes} src={props.image} alt="alternative" />
    </>
  )
}
