import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FcComboChart, FcInTransit, FcPlus } from "react-icons/fc";

const SidebarAdmin = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <FcComboChart />,
    },
    {
      path: "/Nv-expedition",
      name: "Nv expedition",
      icon: <FcPlus />,
    },
    {
      path: "/",
      name: "Suivi de colis",
      icon: <FcInTransit />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "350px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none", fontSize: "15px" }}
            className="logo"
          >
            Administrateur
          </h1>
          <div
            style={{ marginLeft: isOpen ? "160px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SidebarAdmin;
