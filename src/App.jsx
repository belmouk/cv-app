import { useState } from "react";

import "./App.css";

function App() {
  const [content, setContent] = useState({
    name: "John Claude",
    email: "john.claude@gmail.com",
    phone: "123-459-8659",
    schoolName: "MIT",
    schoolMajor: "Software Engineering",
    graduationYear: "2026",
    companyName: "Google Inc.",
    role: "Senior Software Engineer",
    responsibilities:
      "Lead a team of 100 software engineers generating a value of over 100$MM with a YOY growth of 20%.",
    jobStartDate: "20-12-2000",
    jobEndDate: "20-12-2026",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  }

  return (
    <>
      <div className="forms-container">
        <Form
          title="General information"
          handleChange={handleChange}
          inputs={[
            {
              label: "Name",
              type: "text",
              name: "name",
              id: "name",
            },
            {
              label: "Email",
              type: "email",
              name: "email",
              id: "email",
            },
            {
              label: "Phone",
              type: "tel",
              name: "phone",
              id: "phone",
            },
          ]}
        ></Form>
        <Form
          title="Education"
          handleChange={handleChange}
          inputs={[
            {
              label: "School name",
              type: "text",
              name: "schoolName",
              id: "school",
            },
            {
              label: "Major",
              type: "text",
              name: "schoolMajor",
              id: "major",
            },
            {
              label: "Graduation Year",
              type: "number",
              name: "graduationYear",
              id: "graduation-year",
            },
          ]}
        ></Form>
        <Form
          title="Professional Experience"
          handleChange={handleChange}
          inputs={[
            {
              label: "Company name",
              type: "text",
              name: "companyName",
              id: "company-name",
            },
            {
              label: "Role",
              type: "text",
              name: "role",
              id: "role",
            },
            {
              label: "Responsibilities",
              type: undefined,
              name: "responsibilities",
              id: "responsibilities",
            },
            {
              label: "Start date",
              type: "date",
              name: "jobStartDate",
              id: "job-start-date",
            },
            {
              label: "End date",
              type: "date",
              name: "jobEndDate",
              id: "job-end-date",
            },
          ]}
        ></Form>
      </div>
      <div className="cv-container">
        <section className="cv-header">
          <h2>{content.name}</h2>
          <ul>
            <li>{content.email}</li>
            <li>{content.phone}</li>
          </ul>
        </section>
        <section className="cv-content">
          <h2>Professional Experience</h2>
          <h3>{content.companyName}</h3>
          <div>
            <span>{content.role}</span>
            <span>
              {content.jobStartDate} - {content.jobEndDate}
            </span>
          </div>
          <p>{content.responsibilities}</p>
        </section>
        <section className="cv-content">
          <h2>Education</h2>
          <div>
            {content.schoolName}, {content.schoolMajor} (
            {content.graduationYear})
          </div>
        </section>
      </div>
    </>
  );
}

function Form({ title, inputs, handleChange }) {
  return (
    <form action="" autoComplete="on" className="form">
      <fieldset>
        <legend>{title}</legend>
        {inputs.map((item, index) => {
          return (
            <Input {...item} key={index} handleChange={handleChange}></Input>
          );
        })}
      </fieldset>
    </form>
  );
}

function Input({ label, type, name, id, handleChange }) {
  return (
    <label htmlFor={id}>
      {label + " "}
      <input type={type} name={name} id={id} onChange={handleChange} />
    </label>
  );
}

export default App;
