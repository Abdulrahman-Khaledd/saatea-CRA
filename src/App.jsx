import { Routes, Route } from "react-router-dom";
import { Register, Login, Home, Contact, NotFound } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  );
}