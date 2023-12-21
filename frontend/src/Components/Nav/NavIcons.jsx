import React from 'react'
import { Link } from 'react-router-dom'

export default function NavIcons(props) {
  return (
    <>
         <span className="fa-stack">
                        <Link to={props.link}>
                            <i className={`fas fa-circle fa-stack-2x`}></i>
                            <i className={`fab fa-${props.name} fa-stack-1x`}></i>
                        </Link>
        </span>
    </>
  )
}
