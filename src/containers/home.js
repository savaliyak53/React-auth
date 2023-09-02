import React from "react";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navLink = ({ isActive, isPending }) => {
    return {
      fontWeight: isPending ? "bold" : "normal",
      color: isPending ? "red" : "blue",
    };
  };

  const navigate = useNavigate();
  return (
    <div>
      {/* <Link to={"about"}>About</Link>
      <br />
      <NavLink style={navLink} to={"contact"}>
        contact
      </NavLink>
      <br />
      <NavLink style={navLink} to={"user/:/:kishan"}>
        user2
      </NavLink>
      <br />
      <NavLink style={navLink} to={"user/123412/kishan"}>
        user1
      </NavLink>
      <br /> */}
      {/* NavLink gives "active" class to element  */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
