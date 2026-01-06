import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <Section
        title="General information"
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
      ></Section>
      <Section
        title="Education"
        inputs={[
          {
            tag: "input",
            label: "School name",
            type: "text",
            name: "school",
            id: "school",
          },
          {
            tag: "input",
            label: "Major",
            type: "text",
            name: "major",
            id: "major",
          },
          {
            tag: "input",
            label: "Start date",
            type: "date",
            name: "school-start",
            id: "school-start",
          },
          {
            tag: "input",
            label: "End date",
            type: "date",
            name: "school-end",
            id: "school-end",
          },
        ]}
      ></Section>
      <Section
        title="Professional Experience"
        inputs={[
          {
            tag: "input",
            label: "Company name",
            type: "text",
            name: "company-name",
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
            name: "job-start-date",
            id: "job-start-date",
          },
          {
            tag: "input",
            label: "End date",
            type: "date",
            name: "job-end-date",
            id: "job-end-date",
          },
        ]}
      ></Section>
    </div>
  );
}

function Section({ title, inputs }) {
  const [isDisabled, setIsDisabled] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
  }
  function handleEdit(e) {
    setIsDisabled(false);
  }
  
  
    return (
      <form action="" autoComplete="on" onSubmit={handleSubmit}>
        <fieldset>
          <legend>{title}</legend>
          {inputs.map((item, index) => {
            if (item.tag === "textarea") {
              return (
                <TextArea
                  {...item}
                  key={index}
                  isDisabled={isDisabled}
                ></TextArea>
              );
            }
            return (
              <Input {...item} key={index} isDisabled={isDisabled}></Input>
            );
          })}
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </fieldset>
      </form>)
 
  
}

function Input({ label, type, name, id, isDisabled }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <label htmlFor={id}>
      {label + " "}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </label>
  );
}

function TextArea({ id, name, label, isDisabled }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <label htmlFor={id}>
      {label + " "}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      ></textarea>
    </label>
  );
}

export default App;
