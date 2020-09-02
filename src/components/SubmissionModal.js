import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import MustRead from "./MustRead";
const SubmissionModal = ({ title, show, handleClose, children }) => {
  const [isSubmitEnable, setIsSubmitEnable] = useState(false);

  useEffect(() => {
    // required to make the submit button in a proper state
    setIsSubmitEnable(false);
    return () => {};
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MustRead />
        {children}
      </Modal.Body>
      <Modal.Footer>
        <div className="student-request-panel__submit-button">
          <Form.Check
            onClick={() => setIsSubmitEnable(!isSubmitEnable)}
            className="mr-2"
            aria-label="option 1"
            label="Yes, I understand submit a request."
          />

          <Button variant="success mr-1" disabled={!isSubmitEnable}>
            Submit
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default SubmissionModal;
