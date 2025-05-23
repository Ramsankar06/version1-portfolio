import React from "react"
import hero from "../assets/heroram.png"
import "animate.css"

const Home = () => (
  <div className="container-fluid  text-center">
    <h1 className="mt-5">Welcome to My Portfolio</h1>
    <p>I am a passionate developer ready to build impactful projects.</p>

    <div className="mt-3">
      <img
        src={hero}
        alt="My Profile"
        className="img-fluid "
      />
    </div>
  </div>
)

export default Home
