import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import StudentForm from "./components/StudentForm/StudentForm";
import StudentRequestForm from "./components/StudentRequestForm";

const axios = Axios.create({
  //baseURL: "https://ict-system.000webhostapp.com/api.php",
  baseURL: "http://localhost/api/public-api.php",
});
const cache = new LRU({ max: 10 });
configure({ axios, cache });

function App() {
  const [userID, setUserID] = useState(3);
  const [
    { data: student, loading: getLoading, error: getError },
    executePost,
  ] = useAxios(
    {
      url: `/records/students/` + userID + `?include=full_name,gsuite_email`,
      method: "GET",
    },
    {
      manual: false,
    }
  );

  return (
    <div className="App">
      {getLoading && <p>Loading..</p>}
      {student && student.full_name}
      <StudentForm />
    </div>
  );
}

export default App;
