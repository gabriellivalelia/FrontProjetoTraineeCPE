import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Outlet/>
      <p>Footer</p>
    </React.StrictMode>
  );
}

export default App;
