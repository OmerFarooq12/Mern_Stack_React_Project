import React from 'react'
export default function NavItem(props) {
  return (
    <>
            <li className="nav-item">
                        <a className="nav-link page-scroll" href={props.link}>{props.name} <span className="sr-only">(current)</span></a>
            </li>
    </>
  )
}
