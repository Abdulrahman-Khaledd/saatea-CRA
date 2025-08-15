import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<><Navbar /> <h1 className="text-center" style={{flex:1,alignContent:"center"}}> لم يتم العثور على الصفحة </h1> <Footer/></>} />
    </Routes>
  );
}