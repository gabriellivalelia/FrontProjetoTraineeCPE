import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
