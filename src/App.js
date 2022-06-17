import React from "react";
import Footer from "./components/Footer/Index";
import FormApi from "./components/Form/MateriasApi";
import Navbar from "./components/Navbar/Index";
import Table from "./components/Table/Index";

function App() {
  return (
    <>
      <Navbar />

      <Table />
      <FormApi />
      <Footer />
    </>
  );
}

export default App;
