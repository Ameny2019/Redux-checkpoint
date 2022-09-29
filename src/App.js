import "./App.css";
import AddTodo from "./Components/AddTodo";
import ListTodo from "./Components/ListTodo";
import {useState} from 'react';
function App() {

    //----------- Fake Data -----------
    const [job, setJob] = useState([
    {  id: "1",description: "t1", isDone: true },
    {  id: "2",description: "t2", isDone: false },
    {  id: "3",description: "t3", isDone: false },
    ]);

    const add = (Addtodo) =>{
      setJob([...job,Addtodo])
    }
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo add={add} />
      <ListTodo  jobs={job}  />
    </>
  );
}

export default App;
