// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CustomNavbar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Header />
            <MainContent />
          </div>
        </div>
  );
}

export default App;
