import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../store/TodoSlice";

export default function TodoItem({ text, id, completed }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState(text);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleToggle = (id, isCompleted) => {
    console.log(id, isCompleted);
    setIsCompleted(!isCompleted);
    dispatch(toggleTodo({ id: id }));
  };

  const handleEdit = () => {
    if (editMode) {
      dispatch(editTodo({ id: id, text: inputText }));
    }
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <li className="d-flex flex-row mb-3" key={id}>
      <input
        type="text"
        className="form-control"
        value={inputText}
        onChange={handleChange}
        disabled={!editMode}
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={() => dispatch(deleteTodo(id))}
      >
        Delete
      </button>
      <button className="btn btn-outline-secondary" onClick={handleEdit}>
        {editMode ? "Save" : "Edit"}
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => handleToggle(id, isCompleted)}
      >
        Toggle
      </button>
    </li>
  );
}
