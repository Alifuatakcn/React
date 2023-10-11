import React from 'react'

const Style2 = () => {

    const styleTitle={
        fontSize:"2rem",
        color:"red",
        fontWeight:"bold",
        textAlign:"center"
    }
  return (
    <div>
        <h2 style={styleTitle}>JSX Loops</h2>
        <p>Lorem ipsum</p>

        <h2 style={{...styleTitle,color:"blue"}}>Companent Props</h2>
        <p>Lorem ipsum</p>
    </div>
  )
}

export default Style2