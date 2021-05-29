import React, { useState } from "react";
import PropTypes from "prop-types";

export function AddCategory({ setCategorias }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias((categoria) => [input,...categoria ]);
  }

  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={input} />
    </form>
  );
}
AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
