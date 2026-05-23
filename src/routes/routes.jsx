import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import Home from "../pages/Home"

function RoutePath() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default RoutePath;