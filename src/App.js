import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/UI/Layout";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
