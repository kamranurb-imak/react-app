import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function RoutePath() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default RoutePath;