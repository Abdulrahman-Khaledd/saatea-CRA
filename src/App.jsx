import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}