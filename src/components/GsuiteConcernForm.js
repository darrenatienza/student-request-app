import React, { useState } from "react";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import MustRead from "./MustRead";

const GsuiteDefinitions = ({ gsuiteConcernName, handleSubmit }) => {
  return (
    <>
      {gsuiteConcernName == "Forgot Password" ? (
        <SubmissionCard title={gsuiteConcernName}></SubmissionCard>
      ) : (
        ""
      )}

      {gsuiteConcernName ==
      "Failed Activation (cant login in gsuite account for the first time)" ? (
        <SubmissionCard title={gsuiteConcernName} handleSubmit={handleSubmit}>
          <>
            <p>
              For failed activation of your Gsuite account, please ensure that
              you are keying the correct username
              "firstname.lastname@g.batstate-u.edu.ph" format and default
              password "batstateu117".
            </p>
            <hr />
            <div className="gsuite-concern-form__failed-activation-button">
              <p className="mb-0">
                Couldn't find your Google Account?{" "}
                <span className="text-success">
                  <strong>Submit</strong>
                </span>{" "}
                a report.
              </p>
            </div>
          </>
        </SubmissionCard>
      ) : (
        ""
      )}

      {gsuiteConcernName == "Wrong Spelling" ? (
        <SubmissionCard title={gsuiteConcernName}>
          <p>
            Please ensure that the First Name and Last Name of previous section
            is correct. Any mistake may lead to difficulty of accessing your
            Gsuite Account!
          </p>
        </SubmissionCard>
      ) : (
        ""
      )}
    </>
  );
};
const SubmissionCard = ({ title, handleSubmit, children }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
};

const GsuiteConcernOptions = () => {
  const [gsuiteConcerns, setGsuiteConcern] = useState([
    "Failed Activation (cant login in gsuite account for the first time)",
    "Forgot Password",
    "Wrong Spelling",
    "Others",
  ]);
  return (
    <>
      {gsuiteConcerns.map((concern, idx) => (
        <option key={idx} value={concern}>
          {concern}
        </option>
      ))}
    </>
  );
};
const GsuiteConcernForm = ({ show, handleClose }) => {
  const [gsuiteConcern, setSelectedGsuiteConcern] = useState("");
  const handleChange = (e) => {
    setSelectedGsuiteConcern(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Gsuite Concerns</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="gsuite-concern-form">
          <Card.Header>Please select your GSuite Concerns</Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  GSuite concerns
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="select"
                aria-label=""
                aria-describedby="basic-addon1"
                onChange={(e) => handleChange(e)}
              >
                <option>Select..</option>
                <GsuiteConcernOptions />
              </FormControl>
            </InputGroup>
            <MustRead />
            <GsuiteDefinitions gsuiteConcernName={gsuiteConcern} />
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <div className="submit-button mt-2">
          <Form.Check
            className="mr-2"
            aria-label="option 1"
            label="Yes, I understand submit a request."
          />

          <Button variant="success">Submit</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default GsuiteConcernForm;
