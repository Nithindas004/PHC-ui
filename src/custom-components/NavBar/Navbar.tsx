import React, { useState } from "react";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SiderbarData";
import Cookies from "js-cookie";
import "./NavBar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const shouldShowNavbar =
    location.pathname !== "/phc-form" && location.pathname !== "/login";
    const handlelogout=()=>{Cookies.remove("adminId");Cookies.remove("workerId");history.push("/login");}
  return (
    <>
      {shouldShowNavbar && (
        <>
          <div className="navbar">
            <Link to="#" className="menu-bars" style={{color:"#FFF"}}>
              <FaBars onClick={showSidebar} />
            </Link>
            <button style={{color:"#FFF",marginLeft:1200}} onClick={()=>handlelogout()} >Logout</button>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              </li>
              {sidebarData.map((item, index) => {
                const { title, path, cName } = item;
                return (
                  <li key={index} className={cName}>
                    <Link to={path}>
                      <span>{title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
