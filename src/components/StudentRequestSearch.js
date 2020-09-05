import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { useFilter, useDetail, useModal } from "../entities";

const StudentRequestSearch = () => {
  // load list here
  const [filter, { setSrCodeFilter }] = useFilter();
  const [modal, { setStudentModalVisible }] = useModal();
  const [
    detail,
    { setSrCode, setFullName, setRequests, clearRequest },
  ] = useDetail();
  const handleClick = (e) => {
    if (filter.srCodeFilter == "") {
      setSrCode("");
      setFullName("");
      clearRequest();
    } else {
      /*setSrCode("asdf");
      setFullName("asdf");
      setRequests({
        requestFor: "ID Activation",
        status: "Ok",
        remarks: "nothing",
      });
      setRequests({
        requestFor: "ID Activation",
        status: "Not Ok",
        remarks: "nothing",
      }); */
      setStudentModalVisible(true);
    }

    e.preventDefault();
  };
  return (
    <Form onSubmit={(e) => handleClick(e)}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Sr Code</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          value={filter.srCodeFilter}
          onChange={(e) => setSrCodeFilter(e.target.value)}
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
