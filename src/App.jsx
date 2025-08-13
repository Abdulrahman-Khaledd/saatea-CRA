import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login';
import LoadingPage from "./components/Loading/LoadingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <LoadingPage>
          <Register />
        </LoadingPage>
      } />
      <Route path="/login" element={
        <LoadingPage>
          <Login />
        </LoadingPage>
      } />
    </Routes>
  );
}