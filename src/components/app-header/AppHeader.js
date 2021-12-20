import React from "react";
import "./AppHeader.css";

import {
  AppsOutlined,
  Menu,
  Mic,
  Search,
  Notifications,
  NotificationsOutlined,
  VideoCallOutlined,
  VideoCall,
} from "@mui/icons-material";
import IconBtn from "../commons/IconBtn";
import Tooltip from "@mui/material/Tooltip";

export default function AppHeader() {
  return (
    <div className="header">
      <div className="header_left">
        <IconBtn title="" activeIcon={<Menu />} inactiveIcon={<Menu />} />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div className="header_input">
        <input type="text" placeholder="search" />
        <Tooltip title="Search">
          <Search className="header_input_btn" />
        </Tooltip>

        <IconBtn
          title="Search with your voice"
          activeIcon={<Mic />}
          inactiveIcon={<Mic />}
        />
      </div>

      <div className="header_icons">
        <IconBtn
          title="Create"
          activeIcon={<VideoCall />}
          inactiveIcon={<VideoCallOutlined />}
        />
        <IconBtn
          title="YouTube apps"
          activeIcon={<AppsOutlined />}
          inactiveIcon={<AppsOutlined />}
        />
        <IconBtn
          title="Notifications"
          activeIcon={<Notifications />}
          inactiveIcon={<NotificationsOutlined />}
        />
        <img
          className="header_avatar"
          src="https://avatars.githubusercontent.com/u/65144310?v=4"
          alt=""
        />
      </div>
    </div>
  );
}
