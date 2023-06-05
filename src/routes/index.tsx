import React from "react";
import { Routes, Route } from "react-router";
import PrivateRoute from "./private-route";
import Login from "pages/login";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute>
        <div>hui</div>
      </PrivateRoute>} />
      <Route path="/login" element={<Login/>} />
      <Route
        path="/task-create"
        element={
          <PrivateRoute>
            <div></div>
          </PrivateRoute>
        }
      />
      <Route
        path="/task/:id"
        element={
          <PrivateRoute>
            <div>gggggg</div>
          </PrivateRoute>
        }
      />
      <Route
        path="/frequently-asked-questions"
        element={
          <PrivateRoute>
            <div></div>
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <div></div>
          </PrivateRoute>
        }
      />
      <Route
        path="/users/"
        element={
          <PrivateRoute>
            <div></div>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
