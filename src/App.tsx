import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/">Google</Link>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
