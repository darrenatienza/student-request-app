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
import { MdSearch, MdWarning } from "react-icons/md";

const PendingRequest = () => {
  return (
    <Card>
      <Card.Header>Search Result</Card.Header>
      <Card.Body>
        <Card>
          <Card.Body>
            <span>Details</span>
            <hr />
            <p>Sr Code:</p>
            <p>Full Name:</p>
            <p>Pending Request:</p>
            <Alert variant="danger">
              <Row>
                <Col sm={1} className=" text-center pr-0">
                  <MdWarning size="2em" />
                </Col>
                <Col sm={11} className="pl">
                  <p className="ml-1 mb-0">
                    Request for: <strong>Student Portal Reset</strong>
                  </p>
                  <p className="ml-1 mb-0">
                    Status: <strong>Not Ok</strong>
                  </p>
                  <hr className="mb-2 mt-2" />
                  <p className="ml-1 mb-0">
                    Remarks:{" "}
                    <strong>
                      Please update your picture / signature. It must be white
                      background.
                    </strong>
                  </p>
                  <Form.Check
                    type="checkbox"
                    label="Yes, I updated my picture / signature."
                    style={{ display: "inline-block" }}
                  />
                </Col>
              </Row>
            </Alert>
          </Card.Body>
        </Card>
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
          <PendingRequest />
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
