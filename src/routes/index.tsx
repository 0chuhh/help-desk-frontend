import React from "react";
import { Routes, Route, Navigate } from "react-router";
import PrivateRoute from "./private-route";
import Login from "pages/login";
import Home from "../pages/home";
import FAQ from "pages/FAQ/";
import CreateFAQ from "pages/createFAQ";
import FAQdetails from "pages/FAQdetails";
import NotFound from "pages/notFound";
import StaffRoute from "./staff-route";
export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
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
            <FAQ />
          </PrivateRoute>
        }
      />
      <Route
        path="/frequently-asked-questions/:id"
        element={
          <PrivateRoute>
            <FAQdetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-frequently-asked-questions"
        element={
          <PrivateRoute>
            <StaffRoute>
              <CreateFAQ />
            </StaffRoute>
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
      <Route
        path="/404"
        element={
          <PrivateRoute>
            <NotFound />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
