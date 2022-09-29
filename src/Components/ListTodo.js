import Todo from "./Todo";
import { useSelector } from "react-redux";
//const ListTodo = ({ jobs }) => {
const ListTodo = ({}) => {
  const todos = useSelector((state) => state.todo);

  return (
    <>
      {/* {jobs.map((job) => <Todo title={job.title} isDone={job.isDone} />)} */}
      {todos.map((job) => (
        <Todo job={job} />
      ))}
    </>
  );
};

export default ListTodo;
