import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/UI/Layout";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/WelcomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
