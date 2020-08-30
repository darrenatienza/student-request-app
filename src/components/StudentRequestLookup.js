import React from "react";
import {
  Card,
  Alert,
  Form,
  Button,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import {
  MdSearch,
  MdWarning,
  MdEmail,
  MdSchool,
  MdCardMembership,
  MdCallReceived,
} from "react-icons/md";
import { FaIdCard, FaGoogle, FaSchool } from "react-icons/fa";
const PendingRequestAlert = ({ requestFor, status, remarks, children }) => {
  return (
    <Alert variant="danger">
      <Row>
        <Col sm={1} className=" text-center pr-0">
          <MdWarning size="2em" />
        </Col>
        <Col sm={11} className="pl">
          <p className="ml-1 mb-0">
            Request for: <strong>{requestFor}</strong>
          </p>
          <p className="ml-1 mb-0">
            Status: <strong>{status}</strong>
          </p>
          <hr className="mb-2 mt-2" />
          <p className="ml-1 mb-0">
            Remarks:
            <strong>{remarks}</strong>
          </p>
          {children}
        </Col>
      </Row>
    </Alert>
  );
};

const PendingRequestDetail = ({ srCode, fullName, children }) => {
  return (
    <Card>
      <Card.Header>Search Result</Card.Header>
      <Card.Body>
        <Card>
          <Card.Body>
            <span>Details</span>
            <hr />
            <p>Sr Code: {srCode}</p>
            <p>Full Name: {fullName}</p>
            <p>Pending Request:</p>
            {children}
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

const StudentRequestActions = () => {
  return (
    <Card className="student-request-actions">
      <Card.Header>Select action</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={4} className="mb-1">
            <Button variant="info" className="student-request-actions__buttons">
              <FaGoogle size={20} /> Gsuite account concern
            </Button>
          </Col>
          <Col sm={4} className="mb-1">
            <Button
              variant="primary"
              className="student-request-actions__buttons"
            >
              <FaSchool size={20} /> Student Portal Password reset
            </Button>
          </Col>
          <Col sm={4} className="mb-1">
            <Button
              variant="success"
              className="student-request-actions__buttons"
            >
              <FaIdCard size={20} /> ID Activation
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const StudentRequestLookup = () => {
  return (
    <div className="container">
      <Card className="student-request-lookup mt-4">
        <Card.Header>Student Request Lookup</Card.Header>
        <Card.Body>
          <Alert variant="success">
            <p className="text-center mb-0">
              Search your <strong>Sr-Code</strong> to check if you have current
              pending request.
            </p>
          </Alert>
          <Form>
            <Form.Group as={Row}>
              <Form.Label className="pr-0" column sm={2}>
                Sr Code
              </Form.Label>
              <Col sm={10}>
                <InputGroup>
                  <Form.Control type="text" placeholder="XX-XXXXX" />
                  <InputGroup.Append>
                    <Button type="submit">
                      <MdSearch />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Form.Group>
          </Form>
          {/**<PendingRequestDetail>
            <PendingRequestAlert>
              <Form.Check
                type="checkbox"
                label="Yes, I updated my picture / signature."
                style={{ display: "inline-block" }}
              />
            </PendingRequestAlert>
          </PendingRequestDetail> */}
          <StudentRequestActions />
        </Card.Body>
        <Card.Footer>
          <p className="text-danger mb-0">
            You only have <strong>1 tries</strong> to view result for this day.
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default StudentRequestLookup;
