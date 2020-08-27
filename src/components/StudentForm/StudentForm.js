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
    { data: coursesData, loading: courseLoading, error: courseError },
  ] = useAxios("/records/courses");
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
  const courseItems =
    //checks first if course data are loaded
    coursesData &&
    coursesData.records.map((course) => (
      <option key={course.course_id}>{course.course_code}</option>
    ));
  return (
    <div className="container ">
      <Card className="StudentForm__card mt-2">
        <Card.Header>Student Form</Card.Header>
        <Card.Body>
          <Alert variant="success">
            Fill up this form with correct information
            <div>
              <span className="text-danger">Required *</span>
            </div>
          </Alert>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>
                Sr code<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="sr_code"
                type="text"
                placeholder="XX-XXXXX"
                ref={register({
                  required: true,
                  minLength: 5,
                  maxLength: 8,
                  validate: (value) => value.includes("-"),
                })}
              />
              <Form.Text className="text-danger">
                {errors.sr_code && "Sr code is required!"}
              </Form.Text>
              <Form.Text className="text-danger">
                {errors.sr_code &&
                  "Lenght must be greater that 5 and less than 8 characters!"}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                First Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                placeholder="Your First Name"
                ref={register({ required: true, minLength: 2 })}
              />
              <Form.Text className="text-danger">
                {errors.first_name && "First Name is required!"}
              </Form.Text>
              <Form.Text className="text-danger">
                {errors.first_name && "Must not be acronym!"}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Middle Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="middle_name"
                type="text"
                placeholder="Your Middle Name"
                ref={register({ required: true, minLength: 2 })}
              />
              <Form.Text className="text-danger">
                {errors.middle_name && "Middle Name is required!"}
              </Form.Text>
              <Form.Text className="text-danger">
                {errors.middle_name && "Must not be acronym!"}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Last Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                placeholder="Your Last Name"
                ref={register({ required: true, minLength: 2 })}
              />
              <Form.Text className="text-danger">
                {errors.last_name && "LastName Name is required!"}
              </Form.Text>
              <Form.Text className="text-danger">
                {errors.last_name && "Must not be acronym!"}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Gsuite Email Address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="gsuite_email"
                type="email"
                placeholder="Your Gsuite Email Address"
                ref={register({
                  validate: (value) => value.includes("@g.batstate-u.edu.ph"),
                })}
              />
              <Form.Text className="text-danger">
                {errors.gsuite_email && "Gsuite is required!"}
              </Form.Text>
              <Form.Text className="text-danger">
                {errors.gsuite_email && "Must contain GSuite Email Address "}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Course<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="select">{courseItems}</Form.Control>
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
