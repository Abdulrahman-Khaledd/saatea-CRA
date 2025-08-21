import { Routes, Route } from "react-router-dom";
import { Register, Login, Home, Faq, Contact, SolarCalculation, NotFound, Account } from "./pages";
import { Protected } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solarCalculation" element={<SolarCalculation />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Protected> <Account/> </Protected>} />
      <Route path="/401" element={<Protected forceAppear={true} />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}