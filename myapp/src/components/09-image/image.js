import React from 'react'
import northernLights from "../../assets/img/image2.jpg"

const Image = () => {
  return (
    <div>
        {/* <img src="assets/img/sit.jpg" alt='' width="300"/>
        <img src="https://images.unsplash.com/photo-1693149224851-da0601034fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2888&q=80" alt='' width="300"/>
        <img src={northernLights} alt='' width="300"/> */}
        <img src={require("../../assets/img/image1.jpg")} alt='' width="300"/>


    </div>
  )
}

export default Image