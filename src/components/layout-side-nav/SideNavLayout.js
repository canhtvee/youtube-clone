import React from "react";
import "./SideNavLayout.css";
import SideNavRow, { SideNavChannel } from "./SideNavRow";
import {
  SideNavItemIcons,
  SideNavItemTitles,
  SideNavItemNames,
} from "./SideNavItems";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideNavLayout() {
  const [activeItem, setActiveItem] = useState("Home");

  const navigate = useNavigate();
  const handleClick = (title) => () => {
    setActiveItem(title);
    const path = title === "Home" ? "/" : `/feed/${SideNavItemNames[title]}`;
    navigate(path);
  };

  return (
    <div className="sideNavLayout">
      {SideNavItemTitles.map((title, index) => {
        return (
          <SideNavRow
            key={index}
            title={title}
            ActiveIcon={SideNavItemIcons[index * 2]}
            InactiveIcon={SideNavItemIcons[index * 2 + 1]}
            activeItem={activeItem}
            onClick={handleClick(title)}
          />
        );
      })}
      <vl className="sideNavLayout_divider" />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
      <SideNavChannel />
    </div>
  );
}
