import React from 'react'

const Frame = ({ children }) => {
  return (
    <div>
      <h1>Dit is de page title</h1>
      { children }
    </div>
  )
}

export default Frame