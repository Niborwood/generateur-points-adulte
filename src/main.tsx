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
import { CardWrapper } from "./components/ui";
import QuestionsDashboard from "./components/admin/questions-dashboard";
import StatsDashboard from "./components/admin/stats-dashboard";
import AdminWrapper from "./components/admin/admin-wrapper";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Quiz />} />

            {/* Admin */}
            <Route
              path="/gpa-admin"
              element={
                <AdminWrapper>
                  <Admin />
                </AdminWrapper>
              }
            />
            <Route
              path="/gpa-admin/questions"
              element={
                <AdminWrapper>
                  <CardWrapper large>
                    <QuestionsDashboard />
                  </CardWrapper>
                </AdminWrapper>
              }
            />
            <Route
              path="/gpa-admin/stats"
              element={
                <AdminWrapper>
                  <StatsDashboard />
                </AdminWrapper>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
