import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import StudentRequestForm from "./components/StudentRequestForm";
import StudentRequestLookup from "./components/StudentRequestLookup";
import GsuiteConcernForm from "./components/GsuiteConcernForm";
import { useCourse } from "./entities";
const axios = Axios.create({
  //baseURL: "https://ict-system.000webhostapp.com/api.php",
  baseURL: "http://localhost/api/public-api.php",
});
const cache = new LRU({ max: 10 });
configure({ axios, cache });

function App() {
  const [{ data, loading, error }] = useAxios("/records/students");

  const [userID, setUserID] = useState(3);
  const [course, { get }] = useCourse();

  return (
    <div className="App">
      {JSON.stringify(course.vals)}
      {JSON.stringify(data && data.records)}
      <StudentRequestLookup />
    </div>
  );
}

export default App;
