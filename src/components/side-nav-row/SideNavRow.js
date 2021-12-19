import React from "react";
import "./SideNavRow.css";
import { useState } from "react";

export default function SideNavRow(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="sideNavRow" onClick={handleClick}>
      {isActive ? props.activeIcon : props.inactiveIcon}
      <h3>{props.title}</h3>
    </div>
  );
}
