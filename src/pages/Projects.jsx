import { Card, Button, Row, Col } from 'react-bootstrap'

const Projects = () => (
  <div className="container mt-5 mb-5">
    <h2 className="mb-4">Projects</h2>
    <Row className="g-4">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Portfolio Website</Card.Title>
            <Card.Text>Multi-page portfolio built with React and Bootstrap.</Card.Text>
            <Button variant="primary" href="https://github.com/Ramsankar06?tab=repositories" target="_blank">
              View Project
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Online Food App</Card.Title>
            <Card.Text>Food ordering app built with Spring Boot and React.</Card.Text>
            <Button variant="primary" href="https://github.com/Ramsankar06?tab=repositories" target="_blank">
              View Project
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Food Delivery</Card.Title>
            <Card.Text>Meal-Prep-Planner-App with Spring Boot (backend only)</Card.Text>
            <Button
              variant="primary"
              href="https://github.com/iamneo-production/e9f3fd47-e6fb-4082-88c9-d84a12678999-e2e1665b-38fe-476c-8919-292e172ade66"
              target="_blank"
            >
              View Project
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Blood Donation</Card.Title>
            <Card.Text>Blood donation and application info display using React.</Card.Text>
            <Button
              variant="primary"
              href="https://github.com/Ramsankar06/React_"
              target="_blank"
            >
              View Project
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Projects
