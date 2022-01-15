import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./HomePage";
import TodosPage from "./TodosPage";
import NotFound from "./NotFound";
import Welcome from "./WelcomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/welcome" />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
