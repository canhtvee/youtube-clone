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
import IconBtn from "../icon-button/IconBtn";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function AppHeader() {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const navigate = useNavigate();
  const setSearchParams = useSearchParams()[1];
  const handleSearch = () => {
    const search_query = searchText.trim().replace(/ +/g, "+");
    search_query ? setSearchParams({ search_query }) : setSearchParams({});
    console.log("AppHeader: search_query = ", search_query);
    navigate(`/search?search_query=${search_query}`);
  };

  return (
    <div className="header">
      <div className="header_left">
        <IconBtn title="" activeIcon={<Menu />} inactiveIcon={<Menu />} />
        <img
          onClick={() => navigate("/")}
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div className="header_input">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={handleChange}
        />
        <Tooltip title="Search">
          <Search className="header_input_btn" onClick={handleSearch} />
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
