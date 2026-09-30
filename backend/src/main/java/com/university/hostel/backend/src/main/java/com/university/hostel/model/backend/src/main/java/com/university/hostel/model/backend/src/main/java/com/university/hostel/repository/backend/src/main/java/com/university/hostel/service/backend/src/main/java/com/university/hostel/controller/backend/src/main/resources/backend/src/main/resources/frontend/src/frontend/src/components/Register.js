import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ studentId:"", name:"", course:"", yearOfStudy:"", email:"", password:"" });

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/api/students/register", form);
    alert("Registration successful!");
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <input placeholder="Student ID" onChange={e => setForm({...form, studentId:e.target.value})}/>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Course" onChange={e => setForm({...form, course:e.target.value})}/>
      <input placeholder="Year of Study" onChange={e => setForm({...form, yearOfStudy:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;
