/** @format */

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="dashboard"
            element={<DashboardPage></DashboardPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
