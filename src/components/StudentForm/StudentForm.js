import React, { useState } from "react";
import {
  Card,
  Alert,
  Form,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Button,
  Tooltip,
} from "react-bootstrap";
import "./StudentForm.css";
import { MdPersonAdd } from "react-icons/md";

const StudentForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [requestCode, setRequestCode] = useState("12345");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container ">
      <Card className="StudentForm__card mt-2">
        <Card.Header>Student Form</Card.Header>
        <Card.Body>
          <Alert variant="success">
            Fill up this form with correct information
          </Alert>

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Sr code</Form.Label>
              <Form.Control type="text" placeholder="XX-XXXXX" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name Middle Name Last Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gsuite Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Gsuite Email Address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control>
            </Form.Group>
            <hr />

            <Button
              type="submit"
              onClick={handleShow}
              variant="primary"
              style={{ width: "100%" }}
            >
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentForm;
