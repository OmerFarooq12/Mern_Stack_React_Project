import React from 'react'

export default function Buttons(props) {
  return (
    <>
      <a className={props.classes} href={props.link}>{ props.tags}{  props.name}</a>
    </>
  )
}
