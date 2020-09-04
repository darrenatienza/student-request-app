import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
const StudentRequestSearch = ({ onSearchClick }) => {
  return (
    <Form onSubmit={onSearchClick}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Sr Code</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          placeholder="XX-XXXXX"
          aria-label="Search Sr Code"
        />
        <InputGroup.Append>
          <Button type="submit">
            <MdSearch />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default StudentRequestSearch;
