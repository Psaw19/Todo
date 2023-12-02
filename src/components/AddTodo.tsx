import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mr-2 flex-1 rounded"
          placeholder="Add a new todo"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
