import React from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import contactImg from "../../Assets/contact_img.png";


function Contact() {
  return (
    <Container fluid className="contact-section">
    <Container>

      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">
            <img
              src={contactImg} // 
              alt="Contact"
              className="contact-image"
            />
          </div>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="sr-only">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="sr-only">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
                <Form.Group controlId="formMessage"> {/* Add a Form Group for the message */}
                    <Form.Label className="sr-only">Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default Contact;
