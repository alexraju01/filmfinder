import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { sidebarData } from "./NavbarData";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { IconContext } from "react-icons";

function Navbar() {
  // const [sideBar, setSidebar] = useState(false);
  // const showSidebar = () => {
  //   setSidebar(!sideBar);
  // };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <h1 className="logo">FilmFinder</h1>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-item active">Home</li>
              <li className="menu-item">Movies</li>
              <li className="menu-item">Series</li>
              <li className="menu-item">Popular</li>
            </ul>
          </div>
          <div className="profile-container">
            <FaIcons.FaUserCircle className="usericon" size={30} />
            <div className="profile-text-container">
              <span className="user-text">Alex Raju</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        {sidebarData.map((item, index) => {
          return <Link to={item.path}>{item.icon}</Link>;
        })}
      </div>

      {/* <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sideBar ? "navmenu active" : "navmenu"}>
          <div className="navbar">
            <Link to="#" className="menubars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="navmenuitems" onClick={showSidebar}>
            <li className="navbartoggle">
              <Link to="#" className="menubars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </nav>
      </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
