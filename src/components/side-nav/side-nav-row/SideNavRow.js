import React from "react";
import "./SideNavRow.css";
import { useState } from "react";

export default function SideNavRow({ title, ActiveIcon, InactiveIcon }) {
  const [isActive, setIsActive] = useState(false);

  let Icon = isActive ? ActiveIcon : InactiveIcon;
  let style = isActive ? "_active" : "_inactive";

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={`sideNavRow${style}`} onClick={handleClick}>
      <Icon className="sideNavRow_icon" />
      <h3 className={`sideNavRow_text${style}`}>{title}</h3>
    </div>
  );
}
