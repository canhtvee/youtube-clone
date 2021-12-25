import React from "react";
import "./SideNavRow.css";
import { ReactComponent as Logo } from "../../logo.svg";
export default function SideNavRow({
  title,
  ActiveIcon,
  InactiveIcon,
  activeItem,
  onClick,
}) {
  let isActive = activeItem === title ? true : false;
  let Icon = isActive ? ActiveIcon : InactiveIcon;
  let style = isActive ? "_active" : "_inactive";

  return (
    <div className={`sideNavRow${style}`} onClick={onClick}>
      <Icon className="sideNavRow_icon" />
      <h3 className={`sideNavRow_text${style}`}>{title}</h3>
    </div>
  );
}

function SideNavChannel() {
  return (
    <div className="sideNavChannel">
      <Logo className="sideNavChannel_icon" />
      <h3 className="sideNavRow_text_inactive">React Channel</h3>
    </div>
  );
}

export { SideNavChannel };
