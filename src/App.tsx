import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import UserProfile from "./pages/user/Profile";
import RegistrationPage from "./pages/login/RegistrationPage";
import Home from "./pages/Home";
import "./stylesheets/App.css";
import PasswordResetRequestPage from "./pages/login/PasswordResetRequest";
import PasswordResetPage from "./pages/login/PasswordReset";
// import { fakeAuthProvider } from "./auth";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/forgot-password" element={<PasswordResetRequestPage />} />
        <Route path="/password-reset/:token" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  );
};
export default App;
