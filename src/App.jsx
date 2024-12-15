import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodos } from "./store/TodoSlice";
import TodoItem from "./components/TodoItem";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);
  const loading = useSelector((state) => state.todoList.loading);

  useEffect(() => {
    dispatch({ type: "todoList/loadTodos" });
  }, [dispatch]);

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: "New Task", completed: false };
    dispatch(addTodo(newTodo));
  };

  return (
    <div className=" mb-3 ">
      <h1 className="d-flex justify-content-center">Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      {loading ? <p>Loading...</p> : null}
      <ul className="d-flex flex-column mb-3  input-group">
        {console.log(todos)}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
