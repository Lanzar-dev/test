import React from "react";
import Home from "./Pages/Home";
import SinglePost from "./Pages/Single";
import Topbar from "./components/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
