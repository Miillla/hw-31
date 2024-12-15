import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import todoList from "./store/TodoSlice.jsx";
// https://getbootstrap.com/docs/5.3/getting-started/vite/#setup
import "./scss/styles.scss";
// // eslint-disable-next-line no-unused-vars
// import * as bootstrap from "bootstrap";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { todoList },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
