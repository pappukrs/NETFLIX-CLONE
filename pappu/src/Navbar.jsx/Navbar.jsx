import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex"}}>

        <Link to={'/faq'}>FAQ</Link>
        <Link to={'/media'}>Media</Link>

    </div>
  )
}

export default Navbar