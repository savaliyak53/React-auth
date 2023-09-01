import React from "react";
import Header from "../components/header";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>contact</Link>
      <Outlet />
    </div>
  );
};

export default Home;
