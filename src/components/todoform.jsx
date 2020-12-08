import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, SetValue] = useState("");

  const HandleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo");
      return;
    }
    AddTodo(value);
    alert(value);
    SetValue("");
  };

  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={HandleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => SetValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default TodoForm;
