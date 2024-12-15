import { call, put, takeEvery } from "redux-saga/effects";
import {
  loadTodosStart,
  loadTodosSuccess,
  loadTodosFailure,
} from "./TodoSlice";

const fetchTodos = async () => {
  return [
    { id: 1, text: "Learn Redux-Saga", completed: false },
    { id: 2, text: "Practice React", completed: true },
  ];
};

function* loadTodosSaga() {
  try {
    yield put(loadTodosStart());
    const todos = yield call(fetchTodos);
    yield put(loadTodosSuccess(todos));
  } catch (error) {
    console.log(error);
    yield put(loadTodosFailure());
  }
}

export default function* rootSaga() {
  yield takeEvery("todoList/loadTodos", loadTodosSaga);
}
