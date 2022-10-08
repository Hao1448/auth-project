import { Route, Routes } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";

import "./firebase";

export const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </div>
);
