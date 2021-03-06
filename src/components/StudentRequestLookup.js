import React, { useState, useEffect } from "react";
import useAxios, { configure } from "axios-hooks";
import { useCourse } from "../entities";
import MustRead from "./MustRead";
import SubmissionModal from "./SubmissionModal";
import GsuiteConcernModal from "./GsuiteConcernModal";
import StudentRequestSearch from "./StudentRequestSearch";
import { useFilter, useDetail } from "../entities";
import {
  Card,
  Alert,
  Form,
  Button,
  InputGroup,
  Row,
  Col,
  Modal,
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
import GsuiteConcernForm from "./GsuiteConcernForm";
import StudentForm from "./StudentForm";
const PendingRequestAlert = ({
  id,
  requestFor,
  status,
  remarks,
  handleCheck,
}) => {
  const alertType = () => (status == "Ok" ? "success" : "danger");
  return (
    <Alert variant={alertType()}>
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
            Remarks: <strong>{remarks}</strong>
          </p>

          {status != "Ok" && requestFor == "ID Activation" ? (
            // display for id request only
            <Form.Check
              value={id}
              onChange={handleCheck}
              type="checkbox"
              label="Yes, I updated my picture / signature."
              style={{ display: "inline-block" }}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Alert>
  );
};

const Details = () => {
  const [detail] = useDetail();
  return (
    <Card>
      <Card.Header>Search Result</Card.Header>
      <Card.Body>
        <Card>
          <Card.Body>
            <span>Details</span>
            <hr />
            <p>
              Sr Code: <strong>{detail.srCode}</strong>
            </p>
            <p>
              Full Name: <strong>{detail.fullName}</strong>
            </p>
            <p>Pending Request:</p>
            {detail.requests.map((request, idx) => (
              <PendingRequestAlert
                key={idx}
                id={idx}
                handleCheck={(e) => console.log(e.target.value)}
                requestFor={request.requestFor}
                status={request.status}
                remarks={request.remarks}
              />
            ))}
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

// buttons to click for opening the modals
const StudentRequestActions = ({
  show,
  cbHandleStudentPortalPasswordReset,
  cbHandleShowStudentIDActivationModal,
  cbHandleShowGsuiteConcernFormModal,
}) => {
  return (
    <>
      {show && (
        <Card className="student-request-actions">
          <Card.Header>Select action</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={4} className="mb-1">
                <Button
                  onClick={cbHandleShowGsuiteConcernFormModal}
                  variant="info"
                  className="student-request-actions__buttons"
                >
                  <FaGoogle size={20} /> Gsuite account concern
                </Button>
              </Col>
              <Col sm={4} className="mb-1">
                <Button
                  onClick={cbHandleStudentPortalPasswordReset}
                  variant="primary"
                  className="student-request-actions__buttons"
                >
                  <FaSchool size={20} /> Student Portal Password reset
                </Button>
              </Col>
              <Col sm={4} className="mb-1">
                <Button
                  onClick={cbHandleShowStudentIDActivationModal}
                  variant="success"
                  className="student-request-actions__buttons"
                >
                  <FaIdCard size={20} /> ID Activation
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

const StudentIDActivationModal = ({ show, handleShow, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Student ID Activation Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MustRead />
        <div className="student-request-panel__submit-button mt-2">
          <Form.Check
            className="mr-2"
            aria-label="option 1"
            label="Yes, I understand submit a request."
          />

          <Button variant="success">Submit</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const StudentRequestLookup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [
    showStudentIDActivationModal,
    setShowStudentIDActivationModal,
  ] = useState(false);
  const handleCloseStudentIDActivationModal = () =>
    setShowStudentIDActivationModal(false);
  const handleShowStudentIDActivationModal = () =>
    setShowStudentIDActivationModal(true);
  const [
    isGsuiteConcernFormModalVisible,
    setGsuiteConcernFormModalVisible,
  ] = useState(false);
  const [isRequestFound, setRequestFound] = useState(false);
  const handleSearchClick = (event) => {
    console.log(event.target.value);
    event.preventDefault();
  };
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
          <StudentRequestSearch />

          <Details></Details>
          <StudentForm />
          <StudentRequestActions
            show={isRequestFound}
            cbHandleStudentPortalPasswordReset={() => handleShow()}
            cbHandleShowStudentIDActivationModal={() =>
              handleShowStudentIDActivationModal()
            }
            cbHandleShowGsuiteConcernFormModal={() =>
              setGsuiteConcernFormModalVisible(true)
            }
          />
          <GsuiteConcernModal
            show={isGsuiteConcernFormModalVisible}
            handleClose={() => setGsuiteConcernFormModalVisible(false)}
          />
          <SubmissionModal
            title="Student Password Portal Reset Confirmation"
            show={show}
            handleClose={() => handleClose()}
          >
            <Card className="mb-2">
              <Card.Header>Reminders</Card.Header>
              <Card.Body>
                <p>
                  Upon resetting your Student Portal Password, your new password
                  will be the same as your Sr Code.
                </p>
              </Card.Body>
            </Card>
          </SubmissionModal>
          <SubmissionModal
            title="Student ID Activation Confirmation"
            show={showStudentIDActivationModal}
            handleClose={() => handleCloseStudentIDActivationModal()}
          />
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
