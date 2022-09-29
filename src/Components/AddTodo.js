import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoslice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState("");

  return (
    <>
      <input
        onChange={(event) => settitle(event.target.value)}
        placeholder="set todo"
      />
      <button onClick={() => dispatch(addTodo(title))}>Add</button>
    </>
  );
};

export default AddTodo;
