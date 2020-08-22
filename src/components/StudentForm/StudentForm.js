import React, { useState } from "react";
import useAxios from "axios-hooks";
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
import { useForm } from "react-hook-form";

const StudentForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [
    { data: postData, loading: postLoading, error: postError },
    executePost,
  ] = useAxios(
    {
      url: "/records/students",
      method: "POST",
    },
    { manual: true }
  );
  const onSubmit = (data) => {
    try {
      executePost({
        data: {
          sr_code: data.sr_code,
          full_name: data.full_name,
          course_id: 1,
          gsuite_email: data.gsuite_email,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container ">
      <Card className="StudentForm__card mt-2">
        <Card.Header>Student Form</Card.Header>
        <Card.Body>
          <Alert variant="success">
            Fill up this form with correct information
          </Alert>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Sr code</Form.Label>
              <Form.Control
                name="sr_code"
                type="text"
                placeholder="XX-XXXXX"
                ref={register({ required: true, minLength: 5, maxLength: 8 })}
              />
              <Form.Text className="text-danger">
                {errors.sr_code && "*Sr code is required!"}
              </Form.Text>
              <Form.Text className="text-danger">
                {errors.sr_code &&
                  "Lenght must be greater that 5 and less than 8 characters!"}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="full_name"
                type="text"
                placeholder="First Name Middle Name Last Name"
                ref={register}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gsuite Email Address</Form.Label>
              <Form.Control
                name="gsuite_email"
                type="email"
                placeholder="Your Gsuite Email Address"
                ref={register}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control>
            </Form.Group>
            <hr />

            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentForm;
