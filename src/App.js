import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import axios from "../src/axios/index";
import TeamMember from "./components/TeamMember";


const initialFormValues = {
  name: "", 
  email: "",
  role: "",
};

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newTeamMember ={
      name: formValues.name.trim(), 
      email: formValues.email.trim(),
      role: formValues.role,
    }
    
    axios
    .post("fakeapi.com", newTeamMember)
    .then((res) => {
      setTeamMembers([...teamMembers, res.data]);
      setFormValues(initialFormValues)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get("fakeapi.com")
      .then(res => setTeamMembers(res.data))
  }, []);
    
  return (
    <div className="App">
      <h1>Team Builder App</h1>

      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        }) 
      }

    </div>
  );
}

