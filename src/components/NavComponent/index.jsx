import React from 'react'
import Nav from 'react-bootstrap/Nav';

export const NavLink = ({title, link}) => {
  return (
    <>
        <Nav.Link href={`#${link}`}>{title}</Nav.Link>
    </>
  )
}
