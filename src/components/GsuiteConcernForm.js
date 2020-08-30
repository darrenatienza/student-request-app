import React from "react";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";

const GsuiteDefinitions = ({ gsuiteConcernName }) => {
  switch (gsuiteConcernName) {
    case "Failed Activation (cant login in gsuite account for the first time)":
      return (
        <div>
          <p>
            For failed activation of your Gsuite account, please ensure that you
            are keying the correct username
            "firstname.lastname@g.batstate-u.edu.ph" format and default password
            "batstateu117".
            <hr />
          </p>
          <div className="gsuite-concern-form__failed-activation-button">
            <p className="mb-0">
              Couldn't find your Google Account?{" "}
              <span className="text-success">
                <strong>Submit</strong>
              </span>{" "}
              a report.
            </p>
            <Button variant="success" className="ml-2">
              Submit
            </Button>
          </div>
        </div>
      );
      break;
    case "Forgot Password":
      return (
        <>
          <p>
            Please be advised that the accomplishing of your concerns is
            scheduled from Monday to Friday, 8:00 Am to 5:00 Pm. If your
            responses are correct and suited for expected answers, updating your
            account will start upon the date you submitted this request onwards.
            For verifying if your concern was accomplished, just always check
            your GSuite Account by logging in to your Google Apps (Gmail, Google
            Classroom, etc). For Forgot Password concern, your new password will
            be "batstateu117". Note: This Form is exclusive only for BatStateU
            Rosario Students. Any campus that accomplishes this form will not be
            entertain. Thank you.
          </p>
          <hr />
          <div className="gsuite-concern-form__failed-activation-button">
            <Button variant="success" className="ml-2">
              Submit
            </Button>
          </div>
        </>
      );
      break;
    case "Wrong Spelling":
      return (
        <>
          <p>
            Please ensure that the First Name and Last Name of previous section
            is correct. Any mistake may lead to difficulty of accessing your
            Gsuite Account!
          </p>
          <hr />
          <div className="gsuite-concern-form__failed-activation-button">
            <Button variant="success" className="ml-2">
              Submit
            </Button>
          </div>
        </>
      );
      break;
    case "Name Duplication":
      return (
        <>
          <p>
            Your Middle Name will be included in your updated Gsuite Account.
            This may result to uniqueness of your Gsuite Account.
          </p>
          <hr />
          <div className="gsuite-concern-form__failed-activation-button">
            <Button variant="success" className="ml-2">
              Submit
            </Button>
          </div>
        </>
      );
      break;
    default:
      return (
        <p>
          For other concerns, just email ICT Office @
          <span className="text-primary">ict.rosario@g.batstate-u.edu.ph</span>.
        </p>
      );
      break;
  }
};

const GsuiteConcernForm = () => {
  return (
    <div className="container">
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
            >
              <option>Select..</option>
            </FormControl>
          </InputGroup>
          <Card>
            <Card.Header>
              <span className="text-danger">
                <strong>Must Read</strong>
              </span>
            </Card.Header>
            <Card.Body>
              <GsuiteDefinitions gsuiteConcernName="" />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GsuiteConcernForm;
