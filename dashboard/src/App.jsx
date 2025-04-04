import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";

import "./App.css";
import TaskTracker from "./pages/TaskTracker";
import Login from "./pages/Login";
import Users from "./pages/Users";

function App() {
  const isLoggedIn = window.localStorage.getItem("isLoggedin");
  const Usertype = window.localStorage.getItem("Usertype");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          {isLoggedIn && Usertype === "admin" && (
            <>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/AddStudent" element={<AddStudent />} />
              <Route path="/TaskTracker" element={<TaskTracker />} />
              <Route path="/Users" element={<Users />} />
            </>
          )}
          {isLoggedIn && Usertype === "guest" && (
            <>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/TaskTracker" element={<TaskTracker />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
