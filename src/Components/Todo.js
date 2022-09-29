import { deletetodo } from "../redux/todoslice";
import { edittodo } from "../redux/todoslice";
import { useDispatch } from "react-redux";
import EditTask from "./Edittodo";
const Todo = ({ job }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>title: {job.description}</h1>
      <p>status: {job.isDone ? "True" : "false"}</p>
      <button onClick={() => dispatch(deletetodo(job.id))}>delete</button>
      <EditTask/>

      
    </>
  );
};

export default Todo;
