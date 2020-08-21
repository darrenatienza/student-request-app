import React, { useState } from "react";
import {
  Card,
  Alert,
  InputGroup,
  Button,
  FormControl,
  OverlayTrigger,
  Tooltip,
  Form,
  Modal,
} from "react-bootstrap";
import { MdPersonAdd } from "react-icons/md";
import "./StudentRequestForm.css";

const StudentRequestForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [requestCode, setRequestCode] = useState("12345");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <Card className="mt-2">
        <Card.Header>Student Password Reset Form</Card.Header>
        <Card.Body>
          <Alert variant="danger" style={{ textAlign: "center" }}>
            <strong>
              This facility is intended only for BatStateU Rosario Students!
            </strong>
          </Alert>
          <Alert variant="success">
            Fill up this form with correct information
          </Alert>

          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Sr Code</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder="XX-XXXXX"
                  aria-label="Sr code"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Not Found? <strong>Add</strong> new one!
                      </Tooltip>
                    }
                  >
                    <Button variant="primary">
                      <MdPersonAdd />
                    </Button>
                  </OverlayTrigger>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Your Full Name" readOnly />
              <Form.Text className="text-danger">
                Please verify if your full name is correct.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Gsuite Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Gsuite Email Address"
                readOnly
              />
              <Form.Text className="text-danger">
                Please verify if your gsuite email account is correct.
              </Form.Text>
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label style={{ display: "block" }}>
                Reset Password for
              </Form.Label>
              <Form.Check
                type="checkbox"
                label="Gsuite Account"
                style={{ display: "inline-block" }}
              />
              <Form.Check
                type="checkbox"
                label="Student Portal"
                className="form-check-ml-10"
              />
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            className="text-success text-center"
            style={{ fontSize: "30px", marginBottom: "0" }}
          >
            <strong>{requestCode}</strong>
          </p>
          <hr style={{ marginTop: "0", marginBottom: "0", width: "50%" }}></hr>
          <p className="text-muted text-center mb-0">
            Use this code to validate your request.
          </p>
          <p className="text-center">
            <a href="#">Go to validation link</a>
          </p>
          <Card style={{ width: "100%" }}>
            <Card.Header>Reminders</Card.Header>
            <Card.Body>
              <p style={{ textAlign: "center" }}>
                New Password for <strong>Student Portal</strong> will be your
                <strong> sr-code.</strong>
              </p>
              <hr />
              <p style={{ textAlign: "center" }}>
                New Password for <strong>GSuite Account</strong> will be
                <strong> batstateu117</strong>
              </p>
              <p>
                <strong className="text-danger">Notes: </strong>
                Schedule for resetting passwords will be Monday to Friday except
                Holidays, 8 am to 5 pm.
              </p>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentRequestForm;
