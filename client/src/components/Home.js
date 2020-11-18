import React from "react";
import "../styles/Home.css";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <Login />
      </header>
    </div>
  );
};

export default Home;
