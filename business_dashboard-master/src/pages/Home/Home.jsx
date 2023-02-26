import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../Main/Main";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
