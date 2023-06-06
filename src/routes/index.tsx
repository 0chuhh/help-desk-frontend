import React from "react";
import { Routes, Route } from "react-router";
import PrivateRoute from "./private-route";
import Login from "pages/login";
import Home from "../pages/home";
import FAQ from "pages/FAQ";
import CreateFAQ from "pages/createFAQ";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute>
        <Home/>
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
            <FAQ/>
          </PrivateRoute>
        }
      />
      <Route
        path="/create-frequently-asked-questions"
        element={
          <PrivateRoute>
            <CreateFAQ/>
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
