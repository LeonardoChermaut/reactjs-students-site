import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Student/index";
import Subjects from "./pages/Subject/Index";
import Home from "./pages/Home/Index";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import "./index.css";
import { MyThemeProvider } from "./context";
import NotFound from "./pages/NotFound/Index";

function App() {
  return (
    <MyThemeProvider>
      <div className="MyDiv">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alunos" element={<Students />} />
          <Route path="materias" element={<Subjects />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </MyThemeProvider>
  );
}

export default App;
