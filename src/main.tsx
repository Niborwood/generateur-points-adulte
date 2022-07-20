import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

// LAYOUTS
import App from "./App";
import Quiz from "./components/quiz/quiz";
import Admin from "./components/admin";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Quiz />} />
            <Route path="/gpa-admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
