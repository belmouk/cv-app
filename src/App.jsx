import { useState } from "react";

import "./App.css";

function App() {
  const [content, setContent] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    schoolMajor: "",
    graduationYear: "",
    companyName: "",
    role: "",
    responsibilities: "",
    jobStartDate: "",
    jobEndDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  }

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <div>
          <Form
            title="General information"
            handleChange={handleChange}
            inputs={[
              {
                tag: "input",
                label: "Name",
                type: "text",
                name: "name",
                id: "name",
              },
              {
                tag: "input",
                label: "Email",
                type: "email",
                name: "email",
                id: "email",
              },
              {
                tag: "input",
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
                tag: "input",
                label: "School name",
                type: "text",
                name: "schoolName",
                id: "school",
              },
              {
                tag: "input",
                label: "Major",
                type: "text",
                name: "schoolMajor",
                id: "major",
              },
              {
                tag: "input",
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
                tag: "input",
                label: "Company name",
                type: "text",
                name: "companyName",
                id: "company-name",
              },
              {
                tag: "input",
                label: "Role",
                type: "text",
                name: "role",
                id: "role",
              },
              {
                tag: "textarea",
                label: "Responsibilities",
                type: undefined,
                name: "responsibilities",
                id: "responsibilities",
              },
              {
                tag: "input",
                label: "Start date",
                type: "date",
                name: "jobStartDate",
                id: "job-start-date",
              },
              {
                tag: "input",
                label: "End date",
                type: "date",
                name: "jobEndDate",
                id: "job-end-date",
              },
            ]}
          ></Form>
        </div>
        <div>
          <section>
            <h2>{content.name}</h2>
            <ul>
              <li>{content.email}</li>
              <li>{content.phone}</li>
            </ul>
          </section>
          <section>
            <h2>Professional Experience</h2>
            <h3>{content.companyName}</h3>
            <div>
              <p>{content.role}</p>
              <p>
                {content.jobStartDate} - {content.jobEndDate}
              </p>
            </div>
            <p>{content.responsibilities}</p>
          </section>
          <section>
            <h2>Education</h2>

            <div>
              {content.schoolName}, {content.schoolMajor} (
              {content.graduationYear})
            </div>
          </section>
        </div>
      </main>
      <footer>A well made CV is a job half-secured.</footer>
    </>
  );
}

function Form({ title, inputs, handleChange }) {
  return (
    <form action="" autoComplete="on">
      <fieldset>
        <legend>{title}</legend>
        {inputs.map((item, index) => {
          if (item.tag === "textarea") {
            return (
              <TextArea
                {...item}
                key={index}
                handleChange={handleChange}
              ></TextArea>
            );
          }
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

function TextArea({ id, name, label, handleChange }) {
  return (
    <label htmlFor={id}>
      {label + " "}
      <textarea id={id} name={name} onChange={handleChange}></textarea>
    </label>
  );
}

function Section({ title, points }) {
  return (
    <section>
      <h2>{title}</h2>
      <h3>{heading}</h3>
      <ul>
        {points.map((point, index) => {
          return <li key={index}>{point}</li>;
        })}
      </ul>
    </section>
  );
}

export default App;
