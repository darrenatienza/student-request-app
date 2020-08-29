import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import StudentRequestForm from "./components/StudentRequestForm";
import StudentRequestLookup from "./components/StudentRequestLookup";
const axios = Axios.create({
  //baseURL: "https://ict-system.000webhostapp.com/api.php",
  baseURL: "http://localhost/api/public-api.php",
});
const cache = new LRU({ max: 10 });
configure({ axios, cache });

function App() {
  const [userID, setUserID] = useState(3);

  return <div className="App">{<StudentRequestLookup />}</div>;
}

export default App;
