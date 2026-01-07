function Input({ label, type, name, id, handleChange }) {
  return (
    <label htmlFor={id}>
      {label + " "}
      <input type={type} name={name} id={id} onChange={handleChange} />
    </label>
  );
}

export default Input;
