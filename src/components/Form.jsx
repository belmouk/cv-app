import Input from "./Input";

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

export default Form;
