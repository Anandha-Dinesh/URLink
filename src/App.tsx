import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/home";
import CustomTextBox from "./pages/custom_text";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/text",
  //     element: <CustomTextBox />,
  //   },
  // ]);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<CustomTextBox />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
