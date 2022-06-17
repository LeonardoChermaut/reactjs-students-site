import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students/index";
import Subjects from "./pages/Subjects/Index";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="students" element={<Students />} />
        <Route path="subjects" element={<Subjects />} />
      </Routes>
    </div>
  );
}

export default App;