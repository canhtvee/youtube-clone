import React from "react";
import "./IconBtn.css";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

export default function IconBtn(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Tooltip title={props.title}>
      <IconButton className="iconBtn" onClick={handleClick}>
        {isActive ? props.activeIcon : props.inactiveIcon}
      </IconButton>
    </Tooltip>
  );
}
