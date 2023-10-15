import React from 'react'
import { useState } from 'react'
import './assets/Nav.css'

export default function Nav() {

  const Myfunc = () => {
    alert('Hello Sanaullah');
  }

  return (
    <>
      <div className="nav-bar">
        <div className="nav-items">
          <span>Logo</span>
          <span>Title</span>
          <span>AboutUs</span>
        </div>
      </div>

      <button onClick={Myfunc}>clickme</button>
    </>
  )
}
