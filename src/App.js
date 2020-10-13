import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const initialFormValues = {
    name: "", 
    email: "",
    role: "",
  };

  return (
    <div className="App">
      <p>i'm a website</p>
    </div>
  );
}

