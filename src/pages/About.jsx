import React from "react"
import aboutImg from "../assets/rambg.png"
import { Button } from "react-bootstrap"

const About = () => (
  <div className="container mt-5 mb-5">
    <h2 className="text-center mb-4">About Me</h2>
    
    <div className="row align-items-center">
      <div className="col-md-6">
        <p>
          Hello! I'm <strong>Ramsankar</strong>, a developer passionate about
          building modern web applications. I specialize in full-stack development and I'm currently diving deep into <strong>React</strong> and <strong>Spring Boot</strong>.
        </p>
        <p>
          I enjoy solving problems using clean, efficient code and constantly improving my skills through hands-on projects.
        </p>

        <div className="mt-4">
          <Button
            variant="primary"
            href="/assets/ramsankarS_resume.pdf"
            target="_blank"
           
            className="me-3"
          >
            View Resume
          </Button>

          <Button
            variant="outline-primary"
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
           
            className="me-3"
          >
            LinkedIn
          </Button>

          <Button
            variant="outline-dark"
            href="https://github.com/Ramsankar06"
            target="_blank"
           
          >
            GitHub
          </Button>
        </div>

        <blockquote className="blockquote mt-4">
          <p>"Code is like humor. When you have to explain it, it’s bad."</p>
          <footer className="blockquote-footer">– Cory House</footer>
        </blockquote>
      </div>

      <div className="col-md-6 text-center">
        <img
          src={aboutImg}
          alt="Ramsankar"
          className="img-fluid rounded shadow-lg"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
)

export default About
