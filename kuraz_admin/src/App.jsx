import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Layout from "./Components/layout";
import Home from "./Pages/HomePage";
import Categories from "./Pages/CategoriesPage";
import MangeUser from "./Pages/ManageUsersPage";
import ManageQuestions from "./Pages/ManageQuestionsPage";
import QuestionReports from "./Pages/QuestionReportsPage";
import SendNotification from "./Pages/SendNotifications";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="MangeUser" element={<MangeUser />} />
          <Route path="ManageQuestions" element={<ManageQuestions />} />
          <Route path="QuestionReports" element={<QuestionReports />} />
          <Route path="SendNotification" element={<SendNotification />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Login" element={Login} /> */}
      </Routes>
    </BrowserRouter>
  );
}
