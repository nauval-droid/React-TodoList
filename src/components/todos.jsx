import React from "react";
import Todo from "./todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar react"
    },
    {
      text: "belajar props di react"
    },
    {
      text: "belajar state di react"
    },
    {
      text: "belajar react hooks"
    },
    {
      text: "belajar react"
    },
    {
      text: "belajar react"
    },
    {
      text: "belajar props di react"
    },
    {
      text: "belajar state di react"
    },
    {
      text: "belajar react hooks"
    },
    {
      text: "belajar react"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
